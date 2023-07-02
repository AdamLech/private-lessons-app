import React from "react";
import "./css/login-page-style.css";

const Login = () => {
  return (
    <>
      <div className="page-body">
        <div className="top-box">
          <img src="https://via.placeholder.com/100" alt="example image" />
          <h3>Hello!</h3>
          <h5>It's nice to see you</h5>
        </div>
        <div className="bottom-box">
          <div>
            <input type="text" placeholder="Email" />
            <span class="underline"></span>
          </div>
          <div>
            <input type="password" placeholder="Password" />
            <span class="underline"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
