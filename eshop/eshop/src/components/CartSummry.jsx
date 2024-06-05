import { useSelector } from "react-redux";

const CartSummry = ({ summry }) => {
  const totalItems = useSelector((store) => store.cart);
  const items = useSelector((store) => store.items);
  const cartItems = items.filter((item) => {
    return totalItems.includes(item.id);
  });
  // console.log(cartItems);
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;
  const CONVIENCE_FEES = 99;
  cartItems.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });
  finalPayment = totalMRP - totalDiscount + CONVIENCE_FEES;
  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({totalItems.length} Items)
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">${totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -${totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">$99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">${finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default CartSummry;
