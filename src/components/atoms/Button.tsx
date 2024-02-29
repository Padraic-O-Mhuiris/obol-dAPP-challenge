import { PropsWithChildren } from "react";

const Button = ({
  children,
  className = "",
  onClick,
}: PropsWithChildren & { className?: string; onClick?: () => void }) => (
  <button
    className={`${className} bg-grass text-primary py-[12px] px-[24px] rounded-[8px] font-bold hover:bg-grass_light max-w-fit`}
    {...{ onClick }}
  >
    {children}
  </button>
);

export default Button;
