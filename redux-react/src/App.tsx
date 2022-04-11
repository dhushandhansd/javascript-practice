import "./App.css";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import { useState } from "react";
import { useSelector } from "react-redux";
function App() {

  const page = useSelector((state) => state.page);

  return (
    <>
      {
        page ? <Dashboard/> : <Login/>
      }
    </>
  );
}

export default App;
