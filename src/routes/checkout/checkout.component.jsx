import { useContext } from "react";
import {
  CheckoutContainer,
  CheckoutHeader,
  Cell,
  Total,
} from "./checkout.styles";
import { CartContext } from "../../context/cart.context.jsx";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <Cell>Product</Cell>
        <Cell>Description</Cell>
        <Cell>Quantity</Cell>
        <Cell>Price</Cell>
        <Cell>Remove</Cell>
      </CheckoutHeader>
      {cartItems?.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>Total ${totalPrice}</Total>
    </CheckoutContainer>
  );
};
export default Checkout;
