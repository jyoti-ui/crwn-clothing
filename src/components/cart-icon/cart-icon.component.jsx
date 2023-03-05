import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  return (  
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count" onClick={() => setIsCartOpen(!isCartOpen)}>
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
