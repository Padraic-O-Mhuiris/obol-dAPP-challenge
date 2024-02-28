import Image from "next/image";

const POKEMON_API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon?limit=151";

async function fetchPokemonData() {
  return await fetch(POKEMON_API_ENDPOINT).then((res) => res.json());
}

export default async function Home() {
  const pokemonData: any[] = await fetchPokemonData();
  console.log(pokemonData);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
