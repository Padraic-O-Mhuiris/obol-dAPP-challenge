import { Pokemon } from "@/lib/pokemon";
import Button from "../atoms/Button";
import Image from "next/image";
import ExternalLink from "../molecule/ExternalLink";
import Text from "../atoms/Text";
import Audio from "../molecule/Audio";

const Card = ({ pokemon }: { pokemon: Pokemon }) => (
  <div className="bg-tertiary rounded-[12px] min-w-[395px]">
    <div className="flex justify-center">
      <Image
        src={pokemon.sprites.front_default}
        width={220}
        height={220}
        alt={`Card picture for ${pokemon.name}`}
      />
    </div>
    <div className="flex flex-col text-center text-light items-center p-[32px]">
      <div className="">
        <Text className="capitalize text-[18px]">{pokemon.name}</Text>
        <ul className="text-body text-[16px] leading-[24px]">
          <li>Height: {pokemon.height} m</li>
          <li>Weight: {pokemon.weight} kg</li>
          <li>
            <Audio oggUrl={pokemon.cries.latest} />
          </li>
        </ul>
      </div>

      <Button className="mt-[32px]">Collect</Button>
      <ExternalLink
        url={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}`}
      />
    </div>
  </div>
);

export default Card;
