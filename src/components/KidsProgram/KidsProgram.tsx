import React from "react";

const KidsProgram: React.FC = () => (
  <section id="kids" className="kids-program-section bg-light py-5 border-bottom">
    <div className="container">
      <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
        {/* Left Column: Image Placeholder */}
        <div className="col-lg-6 col-12 text-center">
          <div
            className="kids-image-placeholder bg-secondary bg-opacity-25 rounded mb-4 mb-lg-0"
            style={{ width: "100%", height: "300px", maxWidth: 400, margin: "0 auto" }}
          >
            <span className="d-flex h-100 justify-content-center align-items-center text-muted fw-semibold">
              Kids Program Image
            </span>
          </div>
        </div>
        {/* Right Column: Content */}
        <div className="col-lg-6 col-12">
          <h2 className="display-5 fw-bold mb-3">Kids Karate Program</h2>
          <h3 className="h5 fw-normal mb-3 text-primary">Building Confidence, Respect, and Fun</h3>
          <p className="lead mb-3">
            Our Kids Karate Program is designed to help children develop focus, discipline, and self-esteem in a safe and supportive environment. Classes are fun and engaging, teaching valuable life skills while building physical fitness and coordination.
          </p>
          <p>
            Led by experienced instructors, our program encourages respect, teamwork, and perseverance—skills that benefit children both on and off the mat. All levels welcome!
          </p>
          <a href="#contact" className="btn btn-primary btn-lg mt-2 shadow">
            Learn More / Enroll
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default KidsProgram;
