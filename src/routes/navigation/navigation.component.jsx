import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context.jsx";

import {
  LogoContainer,
  NavLinksContainer,
  NavigationContainer,
  NavigationLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavigationLink to="/shop">Shop</NavigationLink>
          {currentUser ? (
            <NavigationLink as="span" onClick={signOutUser}>
              Sign Out
            </NavigationLink>
          ) : (
            <NavigationLink to="/auth">Sign In</NavigationLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      {/* children */}
      <Outlet />
    </>
  );
};
export default Navigation;
