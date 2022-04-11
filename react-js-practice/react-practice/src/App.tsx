import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./auth/Auth";
import Profile from "./redux/components/Profile";
import MetaTrader from "./redux/MetaTrader";

const App = () => {
  return (
    <Auth/>
  );
};

export default App;
