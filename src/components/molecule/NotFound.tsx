import Image from "next/image";
import Text from "../atoms/Text";

const NotFound = ({ className = "" }: { className?: string }) => (
  <div className={`${className} flex flex-col items-center`}>
    <Image
      className="rounded-[16px]"
      src={"/suprised_pikachu.png"}
      height={680}
      width={592}
      alt="suprised pikachu meme"
    />
    <Text className="mt-[16px] text-center">No Pokemon found!</Text>
  </div>
);

export default NotFound;
