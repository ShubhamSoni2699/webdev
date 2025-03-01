import Header from "../ui/Header";
import CartOverview from "../feature/cart/CartOverview";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
