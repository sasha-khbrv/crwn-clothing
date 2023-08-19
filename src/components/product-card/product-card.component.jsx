import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { CartContext } from "../../context/cart.context.jsx";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddItem = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button btnType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddItem}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
