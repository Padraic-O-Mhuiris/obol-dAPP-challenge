import { PropsWithChildren } from "react";

const Button = ({
  children,
  className = "",
  onClick,
  disabled = false,
}: PropsWithChildren & {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}) => (
  <button
    className={`${className} ${!disabled ? "bg-grass hover:bg-grass_light text-primary" : "bg-secondary border-quartary text-quartary border-[2px]"} py-[12px] px-[24px] rounded-[8px] font-bold max-w-fit`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
