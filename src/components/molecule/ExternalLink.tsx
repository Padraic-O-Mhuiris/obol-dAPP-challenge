import Image from "next/image";
import Text from "../atoms/Text";

const ExternalLink = ({
  url,
  className = "",
}: {
  url: string;
  className?: string;
}) => (
  <a
    href={url}
    target="_blank"
    className={`${className} mt-[32px] text-grass font-bold hover:underline`}
  >
    <div className="flex flex-row align-middle align-center">
      <Text className="mr-1">Details</Text>
      <Image
        src={"/right_arrow.svg"}
        alt={"right_arrow"}
        height={16}
        width={16}
      />
    </div>
  </a>
);

export default ExternalLink;
