import React, { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const { addItemToCart, removeItemToCart, clearItemToCart } =
    useContext(CartContext);

  const addCartItem = () => addItemToCart(cartItem);
  const removeCartItem = () => removeItemToCart(cartItem);
  const clearCartItem = () => clearItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeCartItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addCartItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={clearCartItem} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
