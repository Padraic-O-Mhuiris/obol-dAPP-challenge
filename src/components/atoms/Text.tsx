import { PropsWithChildren } from "react";

const Text = ({
  children,
  className = "",
}: PropsWithChildren & { className?: string }) => (
  <p className={`${className} font-bold text-[16px] leading-[24px]`}>
    {children}
  </p>
);

export default Text;
