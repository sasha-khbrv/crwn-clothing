import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (selectCartReducer) => selectCartReducer.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (selectCartReducer) => selectCartReducer.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }
);
