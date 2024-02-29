import PageTitle from "../molecule/PageTitle";

const Header = () => (
  <nav>
    <div className="flex flex-row w-full justify-center">
      <div className="py-8">
        <PageTitle>Pokemon List</PageTitle>
      </div>
    </div>
  </nav>
);

export default Header;
