import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPizzas, getTotalCartPrice } from "./cartSlice";
function CartOverview() {
  const totalPizzas = useSelector(getTotalCartPizzas);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totalPizzas) return null;
  return (
    <div className="flex items-center justify-between bg-stone-700 p-4 text-stone-200">
      <p className="space-x-2 text-stone-300">
        <span>{`${totalPizzas} Pizzas`}</span>
        <span>{`$${totalPrice}`}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
