import useSWR from "swr";

const POKEMON_API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon?limit=151";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function usePokemonApi() {
  const { data, error, isLoading } = useSWR(POKEMON_API_ENDPOINT, fetcher);

  return {
    pokemon: data,
    error,
    isLoading,
  };
}
