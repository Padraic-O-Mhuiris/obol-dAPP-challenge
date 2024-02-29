import { PropsWithChildren } from "react";
import Image from "next/image";
import Title from "../atoms/Title";

const PageTitle = ({ children }: PropsWithChildren) => (
  <div className="flex flex-row">
    <div className="grid grid-cols-2 items-center gap-x-[8px]">
      <div className="justify-self-end">
        <Image
          src="/logo.svg"
          alt="title-logo"
          width={108}
          height={24}
          sizes="(max-height: 28px)"
        />
      </div>
      <Title className="text-[28px] text-muted justify-self-start">
        {children}
      </Title>
    </div>
  </div>
);

export default PageTitle;
