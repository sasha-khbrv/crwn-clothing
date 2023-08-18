import { useState } from "react";
import { createContext } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductsContext = createContext({
  list: []
});

export const ProductsProvider = ({ children }) => {
  const [list, fetchList] = useState(SHOP_DATA);

  return (
    <ProductsContext.Provider value={{ list, fetchList }}>
      {children}
    </ProductsContext.Provider>
  );
};
