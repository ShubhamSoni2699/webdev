import Header from "../ui/Header";
import CartOverview from "../feature/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";
function AppLayout() {
  const navigation = useNavigation();
  let isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Spinner />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
