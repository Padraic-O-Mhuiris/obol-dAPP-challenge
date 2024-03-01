"use client";

import { Pokemon } from "@/lib/pokemon";
import Search from "../organism/Search";
import Card from "../organism/Card";
import { useState } from "react";

const Home = ({ pokemonList }: { pokemonList: Pokemon[] }) => {
  const [filterString, setFilterString] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterString(e.target.value);
  };

  const resetFilter = () => {
    setFilterString("");
  };

  return (
    <main className="container mx-auto min-h-screen">
      <div className="mt-[80px]">
        <Search {...{ handleFilterChange, resetFilter, value: filterString }} />
      </div>
      <div className="mt-[80px] grid grid-cols-3 gap-[80px]">
        {pokemonList
          .filter((p) =>
            p.name.toLowerCase().includes(filterString.toLowerCase()),
          )
          .map((p) => (
            <Card pokemon={p} />
          ))}
      </div>
    </main>
  );
};

export default Home;
