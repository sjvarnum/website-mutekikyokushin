import React from "react";

const Hero: React.FC = () => (
  <section
    className="hero-section bg-light text-dark d-flex align-items-center"
    style={{ minHeight: "75vh" }}
  >
    <div className="container">
      <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
        {/* Left Column: Content */}
        <div className="col-lg-6 col-12 mt-4 mt-lg-0">
          <h1 className="display-4 fw-bold mb-3">Welcome to Muteki Kyokushin</h1>
          <h2 className="h4 fw-normal mb-3">Strength. Discipline. Community.</h2>
          <p className="lead mb-4">
            Discover Kyokushin karate in a supportive and empowering environment. Join our community to build confidence, fitness, and lifelong skills for all ages and experience levels.
          </p>
        </div>
        {/* Right Column: Image Placeholder */}
        <div className="col-lg-6 col-12 text-center">
          <div
            className="hero-image-placeholder bg-secondary bg-opacity-25 rounded"
            style={{ width: "100%", height: "300px", maxWidth: 400, margin: "0 auto" }}
          >
            <span className="d-flex h-100 justify-content-center align-items-center text-muted fw-semibold">
              Image Placeholder
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
