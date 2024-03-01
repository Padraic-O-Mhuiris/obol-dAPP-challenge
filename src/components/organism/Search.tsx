import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Input from "../molecule/Input";

const Search = ({
  handleFilterChange,
  resetFilter,
  value,
}: {
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetFilter: () => void;
  value: string;
}) => (
  <div className="flex flex-row items-center">
    <Title className="text-[32px] text-light">Search</Title>
    <Input
      {...{ handleFilterChange, value }}
      className="grow ml-[24px] min-w-[400px] max-w-[635px]"
    />
    <Button onClick={resetFilter} className="ml-[24px]">
      Reset
    </Button>
  </div>
);

export default Search;
