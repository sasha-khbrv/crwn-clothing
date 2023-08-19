import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ products, title }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products.map((product, i) => {
          if (i > 3) return null;
          return <ProductCard key={product.id} product={product} />;
        })}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
