import { useDispatch, useSelector } from "react-redux";
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
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  decreaseItemQuantity,
  removeItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleIncreaseQuantity = () => {
    dispatch(addItemToCart(cartItems, item));
  };
  const handleDecreaseQuantity = () => {
    dispatch(decreaseItemQuantity(cartItems, item));
  };
  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(cartItems, item.id));
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
