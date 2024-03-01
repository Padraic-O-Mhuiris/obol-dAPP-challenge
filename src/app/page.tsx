import Home from "@/components/templates/Home";
import { collectPokemonData } from "@/lib/pokemon";

export default async function Page() {
  const pokemonList = await collectPokemonData();

  return <Home {...{ pokemonList }} />;
}
