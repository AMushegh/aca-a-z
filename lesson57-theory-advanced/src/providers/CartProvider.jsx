import React, { createContext, useReducer } from "react";
import { CART_ACTIONS } from "../constants/cartActions";

export const CartContext = createContext();

const reducer = (state, action) => {
  const { type, payload = {} } = action;
  console.log(action);

  switch (type) {
    case CART_ACTIONS.EMPTY_CART:
      return {
        cartCount: 0,
        cartItems: {},
      };

    case CART_ACTIONS.ADD_TO_CART:
      console.log("inside");
      return {
        cartCount: state.cartCount + 1,
        cartItems: {
          ...state.cartItems,
          [payload.itemId]: (state.cartItems[payload.itemId] ?? 0) + 1,
        },
      };

    case CART_ACTIONS.REMOVE_FROM_CART:
      if (state.cartCount === 1) {
        return { cart: {}, cartCount: 0 };
      } else {
        return {
          cartCount: state.cartCount - 1,
          cartItems: {
            ...state.cartItems,
            [payload.itemId]: state.cartItems[payload.itemId] - 1,
          },
        };
      }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, { cartItems: {}, cartCount: 0 });

  return (
    <CartContext
      value={{
        cart,
        dispatch,
      }}
    >
      {children}
    </CartContext>
  );
};
