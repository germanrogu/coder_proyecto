import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);

  const addToCart = (product, quantity) => {
    if (isInCart(product.id)) {
      console.log("Ya esta el producto en el carrito"); //Accion para sumar a cantidad
    } else {
      // console.log(`Agregaste ${product.title}, cantidad: ${quantity} .`);
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
    return cartArray.reduce((previousValue, item) => previousValue = previousValue + item.quantity,0) 
  }

  const value = {
    cartArray,
    addToCart,
    deleteItem,
    clearCart,
    isInCart,
    cartCounter,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
