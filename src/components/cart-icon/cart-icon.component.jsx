import { useContext } from "react";
import {
  CartIconContainer,
  ShoppingIcon,
  CartCount,
} from "./cart-icon.styles";
import { CartContext } from "../../context/cart.context.jsx";

const CartIcon = () => {
  const { toggleCartOpen, overallAmount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <CartCount>{overallAmount}</CartCount>
    </CartIconContainer>
  );
};

export default CartIcon;
