const Input = ({
  className = "",
  handleFilterChange,
  value,
}: {
  className?: string;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => (
  <div
    className={`${className} bg-secondary py-[12px] px-[16px] border-[2px] border-quartary rounded-[4px]`}
  >
    <input
      onChange={handleFilterChange}
      value={value}
      type="text"
      name="pokemon"
      id="pokemon"
      className="ml-[4px] font-bold w-full bg-secondary p-0 border-none focus:outline-none focus:ring-0 text-[16px] leading-[16px] text-light align-middle focus:outline-0"
    />
  </div>
);

export default Input;
