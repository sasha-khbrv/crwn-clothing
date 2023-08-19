import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context.jsx";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-row">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems?.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">Total ${totalPrice}</div>
    </div>
  );
};
export default Checkout;
