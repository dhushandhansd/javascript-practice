import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Notification from "./notification";

import "./auth.css";

const Auth = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  const { user } = useAuth0();
  console.log(user);

  const loginAuth = () => {
    loginWithRedirect();
  };

  const logoutAuth = () => {
    logout();
  };

  return (
    <div className="login-section">
      <div className="buttons-section">
        <button className="login-btn" onClick={() => loginAuth()}>
          Login
        </button>

        <button className="logout-btn" onClick={() => logoutAuth()}>
          Logout
        </button>
      </div>
      <div className="user-section">
        {user ? (
          <>
            <img src={user?.picture} alt="user-profile" />
            <h3>{user?.name}</h3>
            <h5>{user?.email}</h5>
          </>
        ) : (
          <h2>Login to View your Profile </h2>
        )}
      </div>
    </div>
  );
};

export default Auth;
