import React from "react";

import { cartActions } from "../store/Cart";
import { useDispatch, useSelector } from "react-redux";
export default function Home({ item }) {
  const dispatchEvent = useDispatch();
  const items = useSelector((store) => store.cart);
  return (
    <>
      <div className="item-container">
        <img
          className="item-image"
          src={`/src/components/${item.image}`}
          alt="item image"
        />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        {!items.includes(item.id) ? (
          <button
            className="btn btn-outline-success my-1 w-100"
            onClick={() => {
              dispatchEvent(cartActions.addToCart(item.id));
            }}
          >
            Add to cart
          </button>
        ) : (
          <button
            className="btn btn-outline-danger my-1 w-100"
            onClick={() => {
              dispatchEvent(cartActions.removeFromCart({ id: item.id }));
            }}
          >
            Remove
          </button>
        )}
      </div>
    </>
  );
}
