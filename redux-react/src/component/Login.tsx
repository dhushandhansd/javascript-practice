import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../actions";
import Dashboard from "./Dashboard";
import { logTime } from "../actions/Actions";

const Login = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const { validUser, navPage, logTime } = bindActionCreators(actionCreators, dispatch);

  const [tempUser, setTempUser] = useState("");
  const [tempPass, setTempPass] = useState("");

  const timeStamp = new Date();
  let userLogTime = String(
    timeStamp.getHours() +
      ":" +
      timeStamp.getMinutes() +
      ":" +
      timeStamp.getSeconds()
  );

  const validateUser = () => {
    if (!tempUser && !tempPass) {
      console.log("Please enter Username and password");
      return false;
    }

    logTime(userLogTime);
    validUser(tempUser);
    // navPage(true);
    console.log("@SD-LN34", store);
    return true;
  };

  return (
    <div className="login-page">
      <div className="login-comp">
        <input
          placeholder="Username"
          onChange={(e) => {
            setTempUser(e.target.value);
          }}
        />
        <input
          placeholder="Password"
          onChange={(e) => {
            setTempPass(e.target.value);
          }}
        />
        <button onClick={validateUser}>Login</button>
      </div>
    </div>
  );
};

export default Login;
