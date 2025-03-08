import Header from "../ui/Header";
import CartOverview from "../feature/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";
function AppLayout() {
  const navigation = useNavigation();
  let isLoading = navigation.state === "loading";
  console.log(isLoading);
  return (
    <div className="layout">
      {isLoading && <Spinner />}

      <Header />
      <main className="overflow-scroll">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
