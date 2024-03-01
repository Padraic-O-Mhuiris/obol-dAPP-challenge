import { Pokemon } from "@/lib/pokemon";
import Button from "../atoms/Button";
import Image from "next/image";
import ExternalLink from "../molecule/ExternalLink";
import Text from "../atoms/Text";
import Audio from "../molecule/Audio";

const Card = ({ pokemon }: { pokemon: Pokemon }) => (
  <div className="bg-tertiary border-quartary border-[2px] rounded-[12px] min-w-[395px]">
    <div className="bg-secondary flex justify-center border-quartary border-b-[2px] rounded-t-[12px]">
      <Image
        src={pokemon.sprites.front_default}
        width={220}
        height={220}
        alt={`Card picture for ${pokemon.name}`}
      />
    </div>
    <div className="flex flex-col text-center text-light items-center p-[32px]">
      <div>
        <Text className="capitalize text-[18px]">{pokemon.name}</Text>
        <div className="mt-[12px] grid grid-cols-2 gap-y-[8px] gap-x-[16px]">
          <>
            <Text className="text-body text-right">Height:</Text>
            <Text className="text-body text-left">{pokemon.height} cm</Text>
          </>
          <>
            <Text className="text-body text-right">Weight:</Text>
            <Text className="text-body text-left">{pokemon.weight} kg</Text>
          </>
          <>
            <Text className="text-body text-right">Cry:</Text>
            <Audio className="text-left" oggUrl={pokemon.cries.latest} />
          </>
        </div>
      </div>

      <Button className="mt-[32px]">Collect</Button>
      <ExternalLink
        url={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}`}
      />
    </div>
  </div>
);

export default Card;
