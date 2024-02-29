import Divider from "../molecule/Divider";
import Header from "../organism/Header";
import Search from "../organism/Search";

const Home = () => (
  <div className="bg-primary">
    <Header />
    <Divider />
    <Search />
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  </div>
);

export default Home;
