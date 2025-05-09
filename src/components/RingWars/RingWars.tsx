import React from "react";
import ringwarsImg from "../../assets/ringwars.jpg";

const RingWars: React.FC = () => (
  <section id="ringwars" className="ringwars-section bg-light py-5 border-bottom">
    <div className="container">
      <div className="text-center mb-4">
        <img
          src={ringwarsImg}
          alt="Ring Wars tournament action at Muteki Kyokushin"
          className="img-fluid rounded ringwars-section__image"
          style={{ maxHeight: 500, objectFit: "cover", margin: "0 auto" }}
          loading="lazy"
        />
      </div>
      <h2 className="fw-bold display-6 mb-3 text-center ringwars-section__title">Ring Wars Tournament</h2>
      <p className="lead mb-4 ringwars-section__subtitle">
      Ring Wars has become one of the country’s greatest sporting events. 
      </p>
      <p className="mb-4 ringwars-section__subtitle">
      Every two years, many of the best fighters from Europe, Canada, South America and the United States go head-to-head in match play competition. Drama, tension, incredible fights, camaraderie and sportsmanship are served in equal measure, captivating an audience there to watch elite Kyokushin competitors. It’s an iconic event that transcends sport, yet remains true to the spirit of Kyokushin.
      </p>
      {/* <div className="ringwars-section__details text-center mx-auto" style={{ maxWidth: 600 }}>
        <div className="alert alert-secondary">
          <strong>Ring Wars March 2025!</strong>
        </div>
      </div> */}
    </div>
  </section>
);

export default RingWars;
