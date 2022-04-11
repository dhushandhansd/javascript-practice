const initialUserState = {
  user: "",
  timestamp: "",
};

const userReducer = (state = { initialUserState }, action: any) => {
  switch (action.type) {
    case "TIME":
      return (state.initialUserState.timestamp += action.payload);
    case "VALID":
      console.log(action.payload);
      return (state.initialUserState.user += action.payload);
    default:
      return state;
  }
};

export default userReducer;
