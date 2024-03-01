import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Input from "../molecule/Input";

const Search = ({
  handleFilterChange,
  resetFilter,
  value,
  isError,
  className = "",
}: {
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  isError: boolean;
  className?: string;
}) => (
  <div className={`${className} flex flex-row items-center`}>
    <Title className="text-[32px] text-light">Search</Title>
    <Input
      handleFilterChange={handleFilterChange}
      value={value}
      className={`${isError ? "border-red-500" : ""} grow ml-[24px] min-w-[400px] max-w-[635px]`}
    />
    <Button onClick={resetFilter} className="ml-[24px]">
      Reset
    </Button>
  </div>
);

export default Search;
