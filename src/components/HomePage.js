import React from "react";
import "../index.css";
import "./css/home-page-style.css";
import images from "../images/images-export";

function HomePage() {
  return (
    <>
      <div className="main-page-content">
        <div className="section-1">
          <div className="section-1-text section-title">
            Wejdź na wyższy poziom wiedzy<div>razem z BookedLessons!</div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
          <img src={images.bgImage1} alt="background 1" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
