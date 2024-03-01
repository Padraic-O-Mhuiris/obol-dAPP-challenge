import Divider from "../molecule/Divider";
import PageTitle from "../molecule/PageTitle";

const NavBar = () => (
  <>
    <nav>
      <div className="flex flex-row w-full justify-center">
        <div className="py-8">
          <PageTitle>Pokemon List</PageTitle>
        </div>
      </div>
    </nav>
    <Divider />
  </>
);

export default NavBar;
