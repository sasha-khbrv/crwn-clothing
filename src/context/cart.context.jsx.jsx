import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  toggleCartOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartOpen = () => setIsCartOpen((prev) => !prev);

  return (
    <CartContext.Provider value={{ isCartOpen, toggleCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
