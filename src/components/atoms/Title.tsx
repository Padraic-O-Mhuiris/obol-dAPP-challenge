import { PropsWithChildren } from "react";

const Title = ({
  children,
  fontSize,
  color = "gray-500",
}: PropsWithChildren & { fontSize: string; color: string }) => (
  <h1 className={`font-bold ${fontSize} text-${color}`}>{children}</h1>
);

export default Title;
