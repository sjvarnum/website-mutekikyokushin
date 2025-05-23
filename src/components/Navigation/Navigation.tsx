// src/components/Navigation/Navigation.tsx
import React from "react";
import logoNavigation from "../../assets/logo-navigation.png";
import "./Navigation.css";

const Navigation: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white navigation">
    <div className="container">
      <a className="navbar-brand navigation__logo" href="/">
        <img
          src={logoNavigation}
          alt="Muteki Kyokushin Logo"
          className="img-fluid"
          style={{ maxHeight: 120 }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse navigation__menu justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#about"
              id="aboutDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About
            </a>
            <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
              <li>
                <a className="dropdown-item" href="/#karate">
                  Kyokushin
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#instructor">
                  Instructor
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#events"
              id="eventsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Events
            </a>
            <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
              {/* <li>
                <a className="dropdown-item" href="/#events">
                  Events
                </a>
              </li> */}
              <li>
                <a className="dropdown-item" href="/#ringwars">
                  Ring Wars
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#programs"
              id="programsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Programs
            </a>
            <ul className="dropdown-menu" aria-labelledby="programsDropdown">
              <li>
                <a className="dropdown-item" href="/#kids">
                  Kids Program
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#adults">
                  Adult Program
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#womens">
                  Women's Program
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/#schedule">
              Schedule
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#location">
              Location
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
