// import { useState } from "react";

import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

console.log(isValidPhone);

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="m-2 space-y-2">
      <h2 className="mb-4 text-2xl font-semibold">Ready to order</h2>

      <Form className="mb-4" method="POST">
        <div className="mb-4 flex flex-row items-center space-x-2">
          <label className="basis-40">First Name</label>
          <div className="grow">
            <input
              className="w-96 rounded-full bg-amber-200 p-2 placeholder:text-center"
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>
        </div>

        <div className="mb-4 flex flex-row items-center space-x-2">
          <label className="basis-40">Phone number</label>
          <div className="grow">
            <input
              className="w-96 rounded-full bg-amber-200 p-2 placeholder:text-center"
              type="tel"
              name="phone"
              required
            />
          </div>
        </div>

        <div className="mb-4 flex flex-row items-center space-x-2">
          <label className="basis-40">Address</label>
          <div className="grow">
            <input
              className="w-96 rounded-full bg-amber-200 p-2 placeholder:text-center"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button className="inline-block rounded-full bg-amber-400 p-3 font-semibold text-stone-800 uppercase hover:cursor-pointer">
            Order now
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
