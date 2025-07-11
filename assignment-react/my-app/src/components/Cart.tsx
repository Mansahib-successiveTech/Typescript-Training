"use client";

import { useShop } from "../context/ShopContext";

const Cart = () => {
  const { cart, removeFromCart, total } = useShop();
  return (
    <>
      <p>cart:{cart.length}</p>
      <ul>
        {cart.map((items) => {
          return (
            <div key={items.id}>
              {items.name} -- {items.price} -- {items.quantity}
              <button
                onClick={() => removeFromCart(items.id)}
                style={{ margin: "3px" }}
              >
                remove
              </button>
            </div>
          );
        })}
      </ul>
      <h3>total -- {total}</h3>
    </>
  );
};
export default Cart