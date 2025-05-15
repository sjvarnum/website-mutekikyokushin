import React from "react";
import heroImg from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero: React.FC = () => (
  <section
    className="hero-section theme-bg-blue text-light d-flex align-items-center"
    style={{ minHeight: "75vh" }}
  >
    <div className="container">
      <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
        {/* Left Column: Content */}
        <div className="col-lg-6 col-12 mt-4 mt-lg-0">
          <h1 className="display-4 fw-bold mb-3">Forging Stronger Selves</h1>
          <h2 className="h4 fw-normal mb-3">
            Traditional Values. Modern Training.
          </h2>
          <p className="lead mb-4">
            At Muteki <Link to="/karate">Kyokushin</Link>, we practice karate as
            it was meant to be—challenging, transformative, and deeply
            rewarding. From beginners to advanced practitioners, our dojo brings
            together people of all ages and backgrounds, helping each person
            discover their own unbreakable spirit. Ready for the challenge?
            Visit our dojo this week for a free orientation.
          </p>
          <a
            href="#contact"
            className="btn theme-bg-red btn-lg shadow text-light"
          >
            Contact Us
          </a>
        </div>
        {/* Right Column: Image Placeholder */}
        <div className="col-lg-6 col-12 text-center">
          <img
            src={heroImg}
            alt="Kyokushin karate demonstration at Muteki Kyokushin dojo"
            className="img-fluid rounded hero-image"
            style={{
              width: "100%",
              height: "500px",
              maxWidth: 600,
              objectFit: "cover",
              margin: "0 auto",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
