import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);

  const addToCart = (product, quantity) => {
    // console.log(`Agregaste ${product.title}, cantidad: ${quantity} .`);
    const newItem = {
      product,
      quantity,
    };
    setCartArray([...cartArray, newItem]);
  };

  const deleteItem = (itemId) => {
    const updatedCart = cartArray.filter(
      (element) => element.itemId !== itemId
    );
    setCartArray(updatedCart);
  };

  const clearCart = () => {
    setCartArray([]);
  };

  const isInCart = (itemId) => {
    return cartArray.some((element) => element.itemId === itemId);
  };

  const value = {
    cartArray,
    addToCart,
    deleteItem,
    clearCart,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
