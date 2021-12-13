const initialState = {
  stocks : 100,
};

const RootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SELL":
      return { ...state, stocks : state.stocks - 10 };
    case "BUY":
      return { ...state, stocks : state.stocks + 10 };
    default:
      return state;
  }
};


export default RootReducer