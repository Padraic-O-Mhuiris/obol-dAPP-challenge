import { PropsWithChildren } from "react";

const Text = ({
  children,
  className = "",
}: PropsWithChildren & { className?: string }) => (
  <p className={`${className} font-bold`}>{children}</p>
);

export default Text;
