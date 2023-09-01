import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import pizza from "../../public/pizza.svg";

function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-x-5 space-y-3 border-b-2 border-stone-200 bg-yellow-500 px-4 py-3 uppercase md:flex-row xl:justify-between">
      <Link className="flex items-center pt-2 tracking-widest md:pr-16" to="/">
        <img src={pizza} height={50} width={50} alt="" />
        <h1>Fast React Pizza Co.</h1>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
