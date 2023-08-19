import {
  CartItemContainer,
  CartItemImg,
  CartItemDetails,
  ItemDetail,
} from "./cart-item.styles";

const CartItem = ({ name, quantity, imageUrl, price }) => {
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={name} />
      <CartItemDetails>
        <ItemDetail>{name}</ItemDetail>
        <ItemDetail>
          {quantity} x ${price}
        </ItemDetail>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
