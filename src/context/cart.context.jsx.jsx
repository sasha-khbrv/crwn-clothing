import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  toggleCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  overallAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [overallAmount, setOverallAmount] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      const overall = cartItems.reduce(
        (acc, item) => (acc = acc + item.quantity),
        0
      );
      setOverallAmount(overall);
    }
  }, [cartItems]);

  const toggleCartOpen = () => setIsCartOpen((prev) => !prev);

  const addItemToCart = (newItem) => {
    const newList = [...cartItems];
    const currItemPosition = cartItems.findIndex(
      (item) => item?.id === newItem.id
    );
    if (currItemPosition === -1) {
      newList.push({ ...newItem, quantity: 1 });
    } else {
      newList[currItemPosition].quantity++;
    }
    setCartItems(newList);
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toggleCartOpen,
        cartItems,
        addItemToCart,
        overallAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
