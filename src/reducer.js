const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newCartData = [...state, action.payload];
      return newCartData;
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
