import React from "react";

const CallToAction: React.FC = () => (
  <section className="cta-section bg-white py-5 border-bottom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h2 className="display-5 fw-bold mb-3">Ready to Begin Your Kyokushin Journey?</h2>
          <p className="lead mb-4">
            Join our community and experience the benefits of martial arts training—confidence, discipline, and lifelong friendships. Get in touch today to start your first class!
          </p>
          <a href="#contact" className="btn theme-bg-blue btn-lg shadow text-light">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
