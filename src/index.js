import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./components/LoginPage";
import ContactUs from "./components/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="header">
    <div className="upper-header">
      <div className="page-logo">
        <img src="https://via.placeholder.com/100" alt="Page logo" />
      </div>
      <div className="upper-header-user-buttons">
        <button className="user-button-login user-button">Zaloguj się</button>
        <button className="user-button-register user-button">
          Zarejestruj się
        </button>
      </div>
    </div>
    <div className="header-nav-bar">
      <BrowserRouter>
        <Link to="/">Strona główna</Link>
        <Link to="/Login">O nas</Link>
        <Link to="/">E-Wykładowcy</Link>
        <Link to="/Login">Blog</Link>
        <Link to="/ContactUs">Kontakt</Link>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);

reportWebVitals();
