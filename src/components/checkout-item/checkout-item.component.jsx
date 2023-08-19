import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context.jsx";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  const { removeItemFromCart, addItemToCart, decreaseItemQuantity } =
    useContext(CartContext);

  const handleIncreaseQuantity = () => {
    addItemToCart(item);
  };
  const handleDecreaseQuantity = () => {
    decreaseItemQuantity(item);
  };
  const handleRemoveItem = () => {
    removeItemFromCart(item.id);
  };

  return (
    <div className={`checkout-item-container`}>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <b className="arrow" onClick={handleDecreaseQuantity}>
          &#10094;
        </b>
        <span className="value">{quantity}</span>
        <b className="arrow" onClick={handleIncreaseQuantity}>
          &#10095;
        </b>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={handleRemoveItem}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
