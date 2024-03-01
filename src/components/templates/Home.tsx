"use client";

import { Pokemon } from "@/lib/pokemon";
import Search from "../organism/Search";
import Card from "../organism/Card";
import { useEffect, useState } from "react";
import Spinner from "../atoms/Spinner";
import NavBar from "../organism/NavBar";
import NotFound from "../molecule/NotFound";
import { BrowserProvider } from "ethers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import Modal from "../organism/Modal";
import Tooltip from "../organism/Tooltip";

const Home = ({ pokemonList }: { pokemonList: Pokemon[] }) => {
  const { walletProvider } = useWeb3ModalProvider();
  const { isConnected } = useWeb3ModalAccount();

  const [filterString, setFilterString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredList, setFilteredList] = useState<Pokemon[]>(pokemonList);
  const [signedPokemon, setSignedPokemon] = useState<
    { pokemon: Pokemon; signature: string } | undefined
  >();

  const [collectedPokemon, setCollectedPokemon] = useState<{
    [k in string]: Pokemon;
  }>({});

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterString(e.target.value);
  };

  const resetFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFilterString("");
  };

  const closeModal = () => setSignedPokemon(undefined);

  async function onSignMessage(p: Pokemon) {
    const provider = new BrowserProvider(walletProvider!);
    const signer = await provider.getSigner();

    try {
      const signature = await signer?.signMessage(p.name);
      setSignedPokemon({ pokemon: p, signature });
      setCollectedPokemon({ ...collectedPokemon, [p.name]: p });
    } catch (e) {}
  }

  // debounced filter
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let list = pokemonList.filter((p) =>
        p.name.toLowerCase().includes(filterString.toLowerCase()),
      );
      setFilteredList(list);
      setIsLoading(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [filterString]);

  const isError = !filteredList.length;

  return (
    <>
      <NavBar />
      <Modal showModal={!!signedPokemon} closeModal={closeModal}>
        {signedPokemon ? (
          <Tooltip
            pokemon={signedPokemon.pokemon}
            signature={signedPokemon.signature}
          />
        ) : undefined}
      </Modal>
      <main className="container mx-auto min-h-screen">
        <Search
          className="mt-[80px]"
          handleFilterChange={handleFilterChange}
          resetFilter={resetFilter}
          value={filterString}
          isError={isError}
        />
        {!isError ? (
          !isLoading ? (
            <div className="mt-[80px] grid grid-cols-3 gap-[80px]">
              {filteredList.map((p) => (
                <div key={p.name}>
                  <Card
                    disabled={!isConnected}
                    isCollected={!!collectedPokemon[p.name]}
                    pokemon={p}
                    onClick={() => onSignMessage(p)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center mt-[160px]">
              <Spinner className=" text-grass_light" />
            </div>
          )
        ) : (
          <NotFound className="mt-[80px]" />
        )}
      </main>
    </>
  );
};

export default Home;
