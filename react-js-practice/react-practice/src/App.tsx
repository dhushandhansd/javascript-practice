import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainComp from "./redux/MainComp";
import HomePage from "./Portfolio/HomePage";
import About from "./Portfolio/About";
import Projects from "./Portfolio/Projects";
import Trader from "./redux/TraderO";

import { Provider } from "react-redux";
import MetaTrader from "./redux/MetaTrader";
import { createStore } from "redux";
import RootReducer from "./redux/reducers/RootReducer";

const App = () => {
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<HomePage/>}/>
  //       <Route path='/about' element={<About/>}/>
  //       <Route path='/projects' element={<Projects/>}/>
  //     </Routes>
  //   </BrowserRouter>
  // )

  const store = createStore(RootReducer);

  return (
    <Provider store={store}>
      <MetaTrader />
    </Provider>
  );
};

export default App;
