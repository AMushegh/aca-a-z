import { CART_ACTIONS } from "../constants/cartActions";

export const addToCart = (itemId) => {
  return { type: CART_ACTIONS.ADD_TO_CART, payload: { itemId } };
};

export const removeFromCart = (itemId) => {
  return { type: CART_ACTIONS.REMOVE_FROM_CART, payload: { itemId } };
};

export const emptyCart = () => {
  return { type: CART_ACTIONS.EMPTY_CART };
};

const imitateCall = () => {
  return new Promise((res) => {
    setTimeout(res, 800);
  });
};

export const addToCartWithCall = async (itemId) => {
  console.log("here");
  await imitateCall();

  return addToCart(itemId);
};
