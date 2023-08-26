import {
  CheckoutContainer,
  CheckoutHeader,
  Cell,
  Total,
} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
      <Total>Total ${cartTotal}</Total>
    </CheckoutContainer>
  );
};
export default Checkout;
