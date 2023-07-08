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
            <h1>Wejdź na wyższy poziom wiedzy</h1>
            <h2 className="bookedlessons">razem z BookedLessons!</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
          <img src={images.bgImage1} alt="background 1" />
        </div>
        <div className="section-2">
          <div className="bg-image-overflow">
            <img
              className="bg-img-2"
              src={images.bgImage2}
              alt="background 1"
            />
          </div>
          <h1>
            Co wyróżnia <span className="bookedlessons">BookedLessons</span> od
            innych?
          </h1>
          <div className="section-2-statistics">
            <div className="section-2-statistics-item">
              <img src={images.statistics} alt="statistics" />
              <h4>Wygodny dostęp do statystyk</h4>
            </div>
            <div className="section-2-statistics-item">
              <img src={images.notes} alt="statistics" />
              <h4>Zweryfikowane kursy</h4>
            </div>
            <div className="section-2-statistics-item">
              <img src={images.location} alt="statistics" />
              <h4>Dostęp z każdego miejsca</h4>
            </div>
            <div className="section-2-statistics-item">
              <img src={images.science} alt="statistics" />
              <h4>Najefektywniejszy tryb nauki na rynku</h4>
            </div>
          </div>
        </div>
        <div className="section-3">
          <img src={images.bgImage4} alt="woman okay" />
          <h1>Statystyki pokazują jasno</h1>
          <div className="section-3-container">
            <div className="section-3-container-item">
              <h1 className="bookedlessons">2 500+</h1>
              <span>Osób ukończyło kurs z wynikiem ponad 80%</span>
              <img src={images.checkmark} />
            </div>
            <div className="section-3-container-item">
              <h1 className="bookedlessons">88%</h1>
              <span>Osób ponownie skorzystałoby z naszej oferty</span>
              <img src={images.hearts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
