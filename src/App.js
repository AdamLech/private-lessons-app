import React from "react";
import "./App.css";
import images from "./images/images-export";
import { Redirect, BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./components/LoginPage";
import ContactUs from "./components/ContactUs";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div className="header">
            <div className="upper-header">
              <div className="page-logo">
                <img src={images.logo2} alt="Page logo" />
              </div>
              <div className="upper-header-user-buttons">
                <Link to="/Login">
                  <button className="user-button user-button-login">
                    Zaloguj się
                  </button>
                </Link>
                <button className="user-button-register user-button">
                  Zarejestruj się
                </button>
              </div>
            </div>

            <div className="header-nav-bar">
              <Link to="/">Strona główna</Link>
              <Link to="/Login">O nas</Link>
              <Link to="/">E-Wykładowcy</Link>
              <Link to="/Login">Blog</Link>
              <Link to="/ContactUs">Kontakt</Link>
              <Link to="/">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/ContactUs" element={<ContactUs />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
