import CategoryPreview from "../../components/category-preview/category-preview.components";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        );
      })}
    </>
  );
};
export default CategoriesPreview;
