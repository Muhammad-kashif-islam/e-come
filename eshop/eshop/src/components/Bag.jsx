import React from "react";
import CartSummry from "./CartSummry";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";
export default function Bag() {
  const items = useSelector((store) => store.items);
  const cartItems = useSelector((store) => store.cart);

  const itemsInCart = items.filter((item) => {
    return cartItems.includes(item.id);
  });
  // console.log(itemsInCart);
  return (
    <>
      {cartItems.length > 0 ? (
        <main>
          <div className="bag-page">
            <div className="bag-items-container">
              {itemsInCart.map((item, index) => (
                <BagItem item={item} key={index} />
              ))}
            </div>

            <div className="bag-summary">
              <CartSummry />
            </div>
          </div>
        </main>
      ) : (
        <main>
          <div className="bag-page">
            <h4 className="text-center my-3 text-dark">
              Not items in cart yet
            </h4>
          </div>
        </main>
      )}
    </>
  );
}
