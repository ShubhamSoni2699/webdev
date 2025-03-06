import { Link } from "react-router-dom";
import SearchOrder from "../feature/order/SearchOrder";
import User from "../feature/user/User";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-200 bg-yellow-500 px-4 py-4 tracking-widest uppercase">
      <Link to="/">Fast React pizza com.</Link>
      <SearchOrder />
      <User />
    </header>
  );
}

export default Header;
