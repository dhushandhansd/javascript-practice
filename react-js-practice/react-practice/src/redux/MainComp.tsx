import React, { useState } from "react"
import { createStore } from "redux"

const MainComp = () => {

    const increment = () => {
        return {
            type:'INCREMENT'
        }
    }

    const decrement = () => {
        return {
            type:'DECREMENT'
        }
    }

    const counter = (state = 0, action:any) => {
        switch(action.type) {
            case 'INCREMENT':
                return state;
            case 'DECREMENT':
                return state + 10;
        }
    }

    let store = createStore(counter)

    store.subscribe(() => {console.log(store.getState())})

    store.dispatch(decrement())

    return(
        <div></div>
    )
}

export default MainComp