import React, { createContext, useCallback, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ cartItems: {}, cartCount: 0 });

  const addToCart = useCallback((itemId) => {
    setCart((prev) => ({
      cartCount: prev.cartCount + 1,
      cartItems: {
        ...prev.cartItems,
        [itemId]: (prev.cartItems[itemId] ?? 0) + 1,
      },
    }));
  }, []);

  return <CartContext value={{ cart, addToCart }}>{children}</CartContext>;
};
