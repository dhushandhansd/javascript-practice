export const validUser = (userName: any) => {
  return (dispatch: any) => {
    dispatch({
      type: "VALID",
      payload: userName,
    });
  };
};

export const logTime = (timestamp: any) => {
  return (dispatch: any) => {
    dispatch({
      type: "TIME",
      payload: timestamp,
    });
  };
};

export const navPage = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: "NAVIGATE",
      payload: payload,
    });
  };
};
