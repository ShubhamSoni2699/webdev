import { Link } from "react-router-dom";
import SearchOrder from "../feature/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500 tracking-widest uppercase">
      <Link to="/">Fast React pizza com.</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
