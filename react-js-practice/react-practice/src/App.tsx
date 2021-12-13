import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./redux/components/Profile";
import MetaTrader from "./redux/MetaTrader";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MetaTrader />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
