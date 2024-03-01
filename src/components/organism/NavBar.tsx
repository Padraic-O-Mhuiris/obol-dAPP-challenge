import ConnectButton from "../molecule/Connect";
import Divider from "../molecule/Divider";
import PageTitle from "../molecule/PageTitle";

const NavBar = () => (
  <>
    <nav>
      <div className="grid grid-cols-3 content-center mx-[100px]">
        <div></div>
        <div className="py-8 place-self-center">
          <PageTitle>Pokemon List</PageTitle>
        </div>
        <ConnectButton className="max-h-[48px] self-center place-self-end " />
      </div>
    </nav>
    <Divider />
  </>
);

export default NavBar;
