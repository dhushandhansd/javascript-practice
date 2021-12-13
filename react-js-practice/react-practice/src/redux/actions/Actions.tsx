export const BUY = "BUY";
export const SELL = "SELL";

export const buy = () => {
  return {
    type: BUY,
  };
};

export const sell = () => {
  return {
    type: SELL,
  };
};