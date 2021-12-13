export const BUY = "BUY";
export const SELL = "SELL";

export const buy = () => {
  return {
    type: BUY,
    snack: "Stock Bought",
  };
};

export const sell = () => {
  return {
    type: SELL,
    snack: "Stock Sold",
  };
};