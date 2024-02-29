import Home from "@/components/templates/Home";
import { collectPokemonData } from "@/lib/pokemon";

export default async function Page() {
  const pokemon = await collectPokemonData();
  console.log(pokemon[0]);
  /* console.log(x[1].species.growth_rate); */

  return <Home />;
}
