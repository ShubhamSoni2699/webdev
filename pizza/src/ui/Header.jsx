import { Link } from "react-router-dom";
import SearchOrder from "../feature/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React pizza com.</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
