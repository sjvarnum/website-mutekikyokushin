// src/components/Navigation/Navigation.tsx
import React from 'react';

const Navigation: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top navigation">
    <div className="container">
      <a className="navbar-brand navigation__logo fw-bold" href="#">
        {/* TODO: Replace text with logo image if available */}
        Muteki Kyokushin
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navigation__menu justify-content-end" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#news">News & Events</a></li>
          <li className="nav-item"><a className="nav-link" href="#dojo">Dojo</a></li>
          <li className="nav-item"><a className="nav-link" href="#karate">Karate</a></li>
          <li className="nav-item"><a className="nav-link" href="#kids">Kids Program</a></li>
          <li className="nav-item"><a className="nav-link" href="#womens">Women’s Program</a></li>
          <li className="nav-item"><a className="nav-link" href="#ringwars">Ring Wars</a></li>
          <li className="nav-item"><a className="nav-link" href="#schedule">Schedule</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;