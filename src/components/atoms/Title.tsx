import { PropsWithChildren } from "react";

const Title = ({
  children,
  className = "",
}: PropsWithChildren & { className?: string }) => (
  <h1 className={`${className} font-bold`}>{children}</h1>
);

export default Title;
