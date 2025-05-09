import React from "react";
import { Link } from "react-router-dom";
import kidsImg from "../../assets/kids.jpg";

const KidsProgram: React.FC = () => (
  <section id="kids" className="kids-program-section bg-light py-5 border-bottom">
    <div className="container">
      <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
        {/* Left Column: Image Placeholder */}
        <div className="col-lg-6 col-12 text-center">
          <img
            src={kidsImg}
            alt="Kids practicing karate at Muteki Kyokushin dojo"
            className="img-fluid rounded mb-4 mb-lg-0 kids-image"
            style={{ width: "100%", height: "400px", maxWidth: 600, objectFit: "cover", margin: "0 auto" }}
            loading="lazy"
          />
        </div>
        {/* Right Column: Content */}
        <div className="col-lg-6 col-12">
          <h2 className="display-5 fw-bold mb-3">Kids Karate Program</h2>
          <h3 className="h5 fw-normal mb-3 theme-text-red">Building Confidence, Respect, and Fun</h3>
          <p className="lead mb-3">
            Our Kids Karate Program is designed to help children develop focus, discipline, and self-esteem in a safe and supportive environment. Classes are fun and engaging, teaching valuable life skills while building physical fitness and coordination.
          </p>
          <p>
            Led by experienced instructors, our program encourages respect, teamwork, and perseverance—skills that benefit children both on and off the mat. All levels welcome!
          </p>
          <Link to="/kids-karate" className="btn theme-bg-blue btn-lg mt-2 shadow text-light">
            Learn More / Join Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default KidsProgram;
