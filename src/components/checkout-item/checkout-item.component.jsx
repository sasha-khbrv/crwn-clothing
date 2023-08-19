import { useContext } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Cell,
  QuantityCell,
  Arrow,
  Value,
  RemovedButton,
} from "./checkout-item.styles";
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
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Cell>{name}</Cell>
      <QuantityCell>
        <Arrow onClick={handleDecreaseQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleIncreaseQuantity}>&#10095;</Arrow>
      </QuantityCell>
      <Cell>${price}</Cell>
      <RemovedButton onClick={handleRemoveItem}>&#10005;</RemovedButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
