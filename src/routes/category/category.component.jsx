import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <h2>{category.toUpperCase()}</h2>
      <CategoryContainer>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </>
  );
};
export default Category;
