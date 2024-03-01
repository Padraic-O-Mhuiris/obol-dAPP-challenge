import Home from "@/components/templates/Home";
import Web3Configuration from "@/components/templates/Web3Configuration";
import { collectPokemonData } from "@/lib/pokemon";

export default async function Page() {
  const pokemonList = await collectPokemonData();

  return (
    <Web3Configuration>
      <Home pokemonList={pokemonList} />;
    </Web3Configuration>
  );
}
