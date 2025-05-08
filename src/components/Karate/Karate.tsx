import React from "react";
import karateImg from "../../assets/masutatsu-oyama.jpg";

const Karate: React.FC = () => (
  <section className="about-kyokushin-section bg-light py-5 border-bottom">
    <div className="container">
      <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
        {/* Left Column: Image Placeholder */}
        <div className="col-lg-6 col-12 text-center">
        <img
          src={karateImg}
          alt="Mas Oyama"
          className="img-fluid rounded karate-section__image"
          style={{ maxHeight: 500, objectFit: "cover", margin: "0 auto" }}
          loading="lazy"
        />
        </div>
        {/* Right Column: Content */}
        <div className="col-lg-6 col-12">
          <h2 className="display-5 fw-bold mb-3 theme-text-red">About Kyokushin Karate</h2>
          <h3 className="h5 fw-normal mb-3 theme-text-blue">Strengthening Body, Mind, and Spirit</h3>
          <p className="lead mb-3">
            Muteki Kyokushin is an authentic Japanese fighting karate school, dedicated to the full-contact style founded by Mas Oyama. Our mission is to develop strength, discipline, and respect through rigorous training and a supportive community.
          </p>
          <p>
            Led by Shihan Rene Cruz—former Knockdown Champion and internationally certified instructor—our dojo is directly connected to Japan, offering world-class instruction and opportunities to compete and grow. Whether you are a beginner or a seasoned athlete, you’ll find a place to challenge yourself and achieve your goals in a positive environment.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Karate;
