import React from "react";
import adultsImg from "../../assets/adults.jpg";

const AdultProgram: React.FC = () => (
  <section id="adults" className="adult-program container py-5">
    <div className="row align-items-center">
      <div className="col-md-6 mb-4 mb-md-0">
        <img
          src={adultsImg}
          className="img-fluid adult-program__img rounded shadow"
          alt="Adults training together at Muteki Kyokushin Karate"
          loading="lazy"
        />
      </div>
      <div className="col-md-6">
        <h2 className="adult-program__title mb-3 text-danger">Adult Karate Program</h2>
        <p className="adult-program__desc lead">
          Our Adult Karate Program welcomes everyone—regardless of gender, background, or fitness level. Whether you're looking to get in shape, learn effective self-defense, or join a supportive community, our classes are designed for you.
        </p>
        <ul className="adult-program__features list-unstyled mb-4">
          <li className="mb-2"><strong>Inclusive Training:</strong> Classes are open to all adults, with a focus on mutual respect, encouragement, and personal growth.</li>
          <li className="mb-2"><strong>Real-World Self-Defense:</strong> Learn practical techniques for confidence and safety in everyday life.</li>
          <li className="mb-2"><strong>Fitness & Wellbeing:</strong> Improve strength, flexibility, and endurance while reducing stress.</li>
          <li className="mb-2"><strong>Community:</strong> Train alongside other motivated adults in a positive, friendly environment.</li>
        </ul>
        <p className="adult-program__cta mb-0">
          Ready to start your journey? <a href="#contact" className="btn btn-danger adult-program__btn">Contact us today</a> and discover how Muteki Kyokushin can help you achieve your goals!
        </p>
      </div>
    </div>
  </section>
);

export default AdultProgram;
