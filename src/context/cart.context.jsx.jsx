import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  toggleCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  overallAmount: 0,
  removeItemFromCart: () => {},
  decreaseItemQuantity: () => {},
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [overallAmount, setOverallAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      let overall = cartItems.reduce(
        (acc, item) => {
          acc.quantity = acc.quantity + item.quantity;
          acc.price = acc.price + item.price * item.quantity;
          return acc;
        },
        { quantity: 0, price: 0 }
      );

      setOverallAmount(overall.quantity);
      setTotalPrice(overall.price);
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

  const removeItemFromCart = (id) => {
    const newList = cartItems.filter((item) => item.id !== id);
    setCartItems(newList);
  };

  const decreaseItemQuantity = (cartItem) => {
    if (cartItem.quantity === 1) {
      removeItemFromCart(cartItem.id);
      return;
    }
    const newList = cartItems.map((item) => {
      if (item.id !== cartItem.id) return item;
      return { ...item, quantity: item.quantity - 1 };
    });
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
        removeItemFromCart,
        decreaseItemQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
