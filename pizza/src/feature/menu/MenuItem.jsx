import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import {
  addItems,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  function handleAddToCart() {
    if (currentQuantity) {
      dispatch(increaseItemQuantity(id));
      return;
    }
    const newPizza = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispatch(addItems(newPizza));
  }
  return (
    <li className="flex gap-2 py-2">
      <img
        className={`h-24 ${soldOut ? "opacity-60 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="font-medium capitalize italic">{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="mt-auto flex flex-row items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500">Sold out</p>
          )}
          {!soldOut && (
            <button
              onClick={handleAddToCart}
              className="rounded-full bg-amber-300 px-3 py-2 hover:cursor-pointer hover:ring hover:ring-amber-300 hover:ring-offset-1 focus:ring focus:ring-amber-200 focus:ring-offset-1 focus:outline"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
