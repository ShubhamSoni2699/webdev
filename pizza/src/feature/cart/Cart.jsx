import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <Link
        to="/menu"
        className="mb-4 text-sm text-blue-500 hover:text-blue-600"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-5 mb-5 ml-2 text-xl font-bold">
        Your cart, {username}
      </h2>

      <ul className="mb-4 ml-2 divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="m-2 space-x-2">
        <Link
          className="mt-3 rounded-full bg-amber-300 p-2 hover:cursor-pointer focus:cursor-pointer"
          to="/order/new"
        >
          Order pizzas
        </Link>
        <button
          onClick={handleClearCart}
          className="mt-3 rounded-full bg-amber-300 p-2 hover:cursor-pointer focus:cursor-pointer"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
