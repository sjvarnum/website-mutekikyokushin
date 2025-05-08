import React from "react";

const WomensProgram: React.FC = () => (
  <section className="womens-program-section bg-white py-5 border-bottom">
    <div className="container">
      <div className="row align-items-center g-5 flex-lg-row-reverse flex-column">
        {/* Right Column (desktop): Image Placeholder */}
        <div className="col-lg-6 col-12 text-center order-2 order-lg-1">
          <div
            className="womens-image-placeholder bg-secondary bg-opacity-25 rounded mb-4 mb-lg-0"
            style={{ width: "100%", height: "300px", maxWidth: 400, margin: "0 auto" }}
          >
            <span className="d-flex h-100 justify-content-center align-items-center text-muted fw-semibold">
              Women's Program Image
            </span>
          </div>
        </div>
        {/* Left Column (desktop): Content */}
        <div className="col-lg-6 col-12 order-1 order-lg-2">
          <h2 className="display-5 fw-bold mb-3">Women's Karate Program</h2>
          <h3 className="h5 fw-normal mb-3 text-primary">Empowering Women Through Martial Arts</h3>
          <p className="lead mb-3">
            Our Women's Program is designed to empower women of all ages and backgrounds. Build strength, confidence, and self-defense skills in a supportive and motivating environment.
          </p>
          <p>
            Classes are led by experienced instructors who understand the unique goals and challenges women face. Join a community that celebrates achievement, fosters resilience, and encourages lifelong fitness.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg mt-2 shadow">
            Learn More / Join Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default WomensProgram;
