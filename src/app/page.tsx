import Home from "@/components/templates/Home";
import { collectPokemonData } from "@/lib/pokemon";

export default async function Page() {
  const pokemonList = await collectPokemonData();
  /* console.log(x[1].species.growth_rate); */

  return <Home {...{ pokemonList }} />;
}
