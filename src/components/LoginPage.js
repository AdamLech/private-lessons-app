import React from "react";
import "./css/login-page-style.css";
import images from "../images/images-export";

const Login = () => {
  return (
    <>
      <div className="page-body">
        <div className="top-box">
          <img src={images.logo} alt="example logo" />
          <h3>Hello!</h3>
          <h5>It's nice to see you</h5>
        </div>
        <div className="bottom-box">
          <div>
            <input type="email" placeholder="Email" />
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
