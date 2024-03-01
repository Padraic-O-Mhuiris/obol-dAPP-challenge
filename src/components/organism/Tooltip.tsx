import { Pokemon } from "@/lib/pokemon";
import Image from "next/image";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

const Tooltip = ({
  pokemon,
  signature,
}: {
  pokemon: Pokemon;
  signature: string;
}) => (
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
        <Title>Congratulations, you caught:</Title>
        <Text className="capitalize text-[18px] mt-[16px]">
          {pokemon.name}!
        </Text>
        <div className="text-wrap">
          <Text className="font-mono font-thin mt-[16px]">
            {(
              signature.slice(2, signature.length).match(/.{0,26}/g) || []
            ).join(" ")}
          </Text>
        </div>
      </div>
    </div>
  </div>
);

export default Tooltip;
