const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((ele) => {
        return ele.id !== action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_ALL") {
    return { ...state, item: [] };
  }

  if (action.type === "INCREMENT") {
    let updateCart = state.item.map((ele) => {
      if (ele.id === action.payload) {
        return { ...ele, quantity: ele.quantity + 1 };
      }
      return ele;
    });
    return { ...state, item: updateCart };
  }
  if (action.type === "DECREMENT") {
    let updateCart = state.item.map((ele) => {
      if (ele.id === action.payload) {
        return { ...ele, quantity: ele.quantity - 1 };
      }
      return ele;
    });
    return { ...state, item: updateCart };
  }
  return state;
};

export default reducer;
