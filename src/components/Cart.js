import React, { createContext, useEffect, useReducer } from "react";
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

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    return dispatch({ type: "CLEAR_ALL" });
  };

  const incrementItem = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  const decrementItem = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    dispatch({ type: "GET_TOTAL_AMOUNT" });
    // console.log("hello")
  }, [state.item]);
  return (
    <cartContext.Provider
      value={{ ...state, removeItem, clearCart, incrementItem, decrementItem }}
    >
      <ContextCart />
    </cartContext.Provider>
  );
};

export default Cart;
