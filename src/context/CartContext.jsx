import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);

  const addToCart = (product, quantity) => {
    if (isInCart(product.id)) {
      const addEqual = cartArray.findIndex(
        (element) => element.product.id === product.id
      );
      cartArray[addEqual].quantity = cartArray[addEqual].quantity + quantity;
    } else {
      const newItem = {
        product,
        quantity,
      };
      setCartArray([...cartArray, newItem]);
    }
  };

  const deleteItem = (id) => {
    const updatedCart = cartArray.filter(
      (element) => element.product.id !== id
    );
    setCartArray(updatedCart);
  };

  const clearCart = () => {
    setCartArray([]);
  };

  const isInCart = (itemId) => {
    return cartArray.some((element) => element.product.id === itemId);
  };

  const cartCounter = () => {
    return cartArray.reduce(
      (previousValue, item) => (previousValue = previousValue + item.quantity),
      0
    );
  };

  const totalPrice = () => {
    const arrayMap = cartArray
      .map((item) => item.product.price * item.quantity)
      .reduce((previousValue, item) => previousValue + item, 0);

    return Math.round(arrayMap * 100) / 100;
  };

  const value = {
    cartArray,
    totalPrice,
    addToCart,
    deleteItem,
    clearCart,
    isInCart,
    cartCounter,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
