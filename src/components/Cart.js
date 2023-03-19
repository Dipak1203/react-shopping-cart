import React, { createContext, useReducer } from "react";
import ContextCart from "./ContextCart";

import products from "./Products";
import reducer from "./reducer";

export const cartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider value={{ ...state }}>
      <ContextCart />
    </cartContext.Provider>
  );
};

export default Cart;
