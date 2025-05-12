import React from "react";
import { Link } from "react-router-dom";
import womenImg from "../../assets/women.jpg";

const WomensProgram: React.FC = () => (
  <section id="womens" className="womens-program-section bg-white py-5 border-bottom">
    <div className="container">
      <div className="row align-items-center g-5 flex-lg-row">
        <div className="col-lg-6 col-12 text-center">
          <img
            src={womenImg}
            alt="Women practicing karate at Muteki Kyokushin dojo"
            className="img-fluid rounded mb-4 mb-lg-0 womens-image"
            style={{ width: "100%", height: "400px", maxWidth: 600, objectFit: "cover", margin: "0 auto" }}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 col-12 ">
          <h2 className="display-5 fw-bold mb-3">Women's Karate Program</h2>
          <h3 className="h5 fw-normal mb-3 theme-text-red">Empowering Women Through Martial Arts</h3>
          <p className="lead mb-3">
            Our women's program is designed to empower women of all ages and backgrounds. Build strength, confidence, and self-defense skills in a supportive and motivating environment.
          </p>
          <p>
            Classes are led by experienced instructors who understand the unique goals and challenges women face. Join a community that celebrates achievement, fosters resilience, and encourages lifelong fitness.
          </p>
          <Link to="/womens-karate" className="btn theme-bg-blue btn-lg mt-2 shadow text-light">
            Learn More / Join Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default WomensProgram;
