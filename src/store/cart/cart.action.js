import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = () => ({
  type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
});

export const addItemToCart = (cartItems, newItem) => {
  const newList = [...cartItems];
  const currItemPosition = cartItems.findIndex(
    (item) => item?.id === newItem.id
  );
  if (currItemPosition === -1) {
    newList.push({ ...newItem, quantity: 1 });
  } else {
    newList[currItemPosition].quantity++;
  }
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newList };
};

export const removeItemFromCart = (cartItems, id) => {
  const newList = cartItems?.filter((item) => item.id !== id);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newList };
};

export const decreaseItemQuantity = (cartItems, cartItem) => {
  if (cartItem.quantity === 1) {
    const newList = cartItems?.filter((item) => item.id !== cartItem.id);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newList };
  }
  const newList = cartItems.map((item) => {
    if (item.id !== cartItem.id) return item;
    return { ...item, quantity: item.quantity - 1 };
  });
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newList };
};
