import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context.jsx";
import { useNavigate } from "react-router-dom";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigateToCheckout = () => {
    navigate("checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem {...item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={handleNavigateToCheckout}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
