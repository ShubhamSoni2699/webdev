// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  console.log(id, cart);
  return (
    <div className="m-2">
      <div className="mb-4 flex flex-row items-center justify-between">
        <h2 className="text-3xl font-bold">{`Order #${id} Status`}</h2>

        <div className="space-x-4">
          {priority && (
            <span className="rounded-full bg-red-600 px-3 py-2 text-lg font-semibold text-white capitalize">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-600 px-3 py-2 text-lg font-semibold text-white capitalize">
            {status} order
          </span>
        </div>
      </div>

      <div className="mb-4 flex flex-row items-center justify-between bg-stone-300 p-5">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const orderData = await getOrder(params.orderId);
  return orderData;
}

export default Order;
