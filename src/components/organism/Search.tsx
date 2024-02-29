import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Input from "../molecule/Input";

const Search = () => (
  <div className="flex flex-row items-center">
    <Title className="text-[32px] text-light">Search</Title>
    <Input className="grow ml-[24px] min-w-[400px] max-w-[635px]" />
    <Button className="ml-[24px]">Button</Button>
  </div>
);

export default Search;
