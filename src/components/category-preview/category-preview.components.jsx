import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ products, title }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products.map((product, i) => {
          if (i > 3) return null;
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
export default CategoryPreview;
