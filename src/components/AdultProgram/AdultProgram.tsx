import React from "react";
import { Link } from "react-router-dom";
import adultsImg from "../../assets/adults.jpg";

const AdultProgram: React.FC = () => (
  <section id="adults" className="adult-program-section bg-white py-5 border-bottom">
    <div className="container">
      <div className="row align-items-center g-5 flex-lg-row">
        <div className="col-lg-6 col-12 text-center">
          <img
            src={adultsImg}
            alt="Adults training together at Muteki Kyokushin Karate"
            className="img-fluid rounded mb-4 mb-lg-0 adults-image"
            style={{ width: "100%", height: "400px", maxWidth: 600, objectFit: "cover", margin: "0 auto" }}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 col-12">
          <h2 className="display-5 fw-bold mb-3">Adult Karate Program</h2>
          <h3 className="h5 fw-normal mb-3 theme-text-red">Karate for Adults of All Backgrounds</h3>
          <p className="lead mb-3">
            Our Adult Karate Program welcomes everyone—regardless of gender, background, or fitness level. Whether you're looking to get in shape, learn effective self-defense, or join a supportive community, our classes are designed for you.
          </p>
          <p>
            Classes focus on practical self-defense, fitness, and personal growth. Train alongside other motivated adults in a positive, respectful environment—no prior experience required. Our instructors encourage mutual respect, perseverance, and lifelong learning.
          </p>
          <Link to="/adult-karate" className="btn theme-bg-blue btn-lg mt-2 shadow text-light">
            Learn More / Join Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AdultProgram;
