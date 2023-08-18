import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../context/cart.context.jsx";

const CartIcon = () => {
  const { toggleCartOpen, overallAmount } = useContext(CartContext);
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{overallAmount}</span>
    </div>
  );
};

export default CartIcon;
