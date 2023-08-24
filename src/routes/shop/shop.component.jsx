import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/category/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoriesMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
