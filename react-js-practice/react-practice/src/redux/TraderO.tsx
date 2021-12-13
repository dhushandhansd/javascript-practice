import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createStore } from "redux";

const TraderO = () => {
    //Redux Part
    const BUY = "BUY_STOCK"
    const SELL = "SELL_STOCK"

    const initialStocks = {
        numOfStock : 23
    }
    
    const buy = () => {
        return {
            type:BUY,
            snack:"Stock Bought"
        }
    }

    const sell = () => {
        return {
            type : SELL,
            snack : "Stock Sold"
        }
    }

    const reducer = (state = initialStocks, action:any) => {
        switch(action.type) {
            case BUY: return {
                numOfStock: state.numOfStock + 1
            }
            case SELL: return {
                numOfStock : state.numOfStock - 1
            }
        }
    }

    // const {buyer:any} = useSelector((state) => {
    //     const {buy} = state
    //     return buy
    // })

    // const {seller:any} = useSelector((state) => {
    //     const {sell} = state
    //     return sell
    // })

    const dispatch = useDispatch()

    const store = createStore(reducer)

    console.log("Initial Stocks", store.getState())

    const unsubscribe = store.subscribe(() => console.log("Updated Stocks", store.getState()))

    //React Part

    const [stocks, setStocks] = useState("50")

    if(parseInt(stocks) > 25) {
        store.dispatch(sell())
    } else {
        store.dispatch(buy())
    }

    unsubscribe()

    return(
        <div>
            <input type="text" onChange={(e) => {setStocks(e.target.value)}} />
            <Link to="/child"><button>Go to Child</button></Link>
        </div>
    )


}

export default TraderO