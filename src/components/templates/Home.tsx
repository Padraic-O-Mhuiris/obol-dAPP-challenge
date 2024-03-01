import { Pokemon } from "@/lib/pokemon";
import Search from "../organism/Search";
import Card from "../organism/Card";

const Home = ({ pokemonList }: { pokemonList: Pokemon[] }) => (
  <main className="container mx-auto min-h-screen">
    <div className="mt-[80px]">
      <Search />
    </div>
    <div className="mt-[80px] grid grid-cols-3 gap-[80px]">
      {pokemonList.map((p) => (
        <Card pokemon={p} />
      ))}
    </div>
  </main>
);

export default Home;
