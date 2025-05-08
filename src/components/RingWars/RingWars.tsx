import React from "react";

const RingWars: React.FC = () => (
  <section id="ringwars" className="ringwars-section bg-light py-5 border-bottom">
    <div className="container">
      <h2 className="fw-bold display-6 mb-3 text-center ringwars-section__title">Ring Wars Tournament</h2>
      <p className="lead text-center mb-4 ringwars-section__subtitle">
        Join us for the annual Muteki Kyokushin Ring Wars! An exciting full-contact tournament open to all ages and skill levels. Experience the spirit of Kyokushin in a supportive, competitive environment.
      </p>
      <div className="ringwars-section__details text-center mx-auto" style={{ maxWidth: 600 }}>
        <div className="alert alert-secondary">
          <strong>Event details coming soon!</strong> Stay tuned for registration info, dates, and rules.
        </div>
      </div>
    </div>
  </section>
);

export default RingWars;
