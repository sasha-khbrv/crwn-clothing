import { useDispatch, useSelector } from "react-redux";
import {
  CartIconContainer,
  ShoppingIcon,
  CartCountComponent,
} from "./cart-icon.styles";
import { selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen());

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <CartCountComponent>{cartCount}</CartCountComponent>
    </CartIconContainer>
  );
};

export default CartIcon;
