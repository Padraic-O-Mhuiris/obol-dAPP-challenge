import { PropsWithChildren } from "react";
import Image from "next/image";

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
      <div className="justify-self-start">
        <h1 className="font-bold text-[28px] text-muted">{children}</h1>
      </div>
    </div>
  </div>
);

export default PageTitle;
