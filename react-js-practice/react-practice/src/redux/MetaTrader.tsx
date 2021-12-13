import { useDispatch, useSelector } from "react-redux";

const MetaTrader = () => {
  const {stocks} = useSelector((state: any) => {
    return state.RootReducer;
  });
  const dispatch = useDispatch();

  const buyer = () => {
    console.log("@SD LINE 8 - Buying Stocks Initiated");
    dispatch({ type: "BUY" });
  };

  const seller = () => {
    console.log("@SD LINE 13 - Selling Stocks Initiated");
    dispatch({ type: "SELL" });
  };

  return (
    <>
      <h1>Stocks Available : {stocks}</h1>
      <button onClick={buyer}>Buy Stock</button>
      <button onClick={seller}>Sell Stock</button>
    </>
  );
};

export default MetaTrader;
