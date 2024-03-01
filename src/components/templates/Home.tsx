"use client";

import { Pokemon } from "@/lib/pokemon";
import Search from "../organism/Search";
import Card from "../organism/Card";
import { useEffect, useState } from "react";
import Spinner from "../atoms/Spinner";
import NavBar from "../organism/NavBar";
import NotFound from "../molecule/NotFound";

const Home = ({ pokemonList }: { pokemonList: Pokemon[] }) => {
  const [filterString, setFilterString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredList, setFilteredList] = useState<Pokemon[]>(pokemonList);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterString(e.target.value);
  };

  const resetFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFilterString("");
  };

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
                  <Card pokemon={p} />
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
