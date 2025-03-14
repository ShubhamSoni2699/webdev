import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { decreaseItemQuantity, deleteItems } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch();
  function handleDeleteClick() {
    if (quantity > 1) {
      dispatch(decreaseItemQuantity(pizzaId));
      return;
    }
    dispatch(deleteItems(pizzaId));
  }
  return (
    <li className="mb-2">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex flex-row items-center justify-between">
        <p>{formatCurrency(totalPrice)}</p>
        <button
          onClick={handleDeleteClick}
          className="rounded-full bg-amber-300 p-2 hover:cursor-pointer"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
