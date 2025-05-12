import React from "react";
import instructorImg from "../../assets/instructor.jpg";

const Instructor: React.FC = () => (
  <section
    id="instructor"
    className="about-instructor-section bg-light py-5 border-bottom"
  >
    <div className="container">
      <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
        <div className="col-lg-6 col-12">
          <h2 className="display-5 fw-bold mb-3 theme-text-red">
            About Shihan Rene Cruz
          </h2>
          <h3 className="h5 fw-normal mb-3 theme-text-blue">
            Owner & Head Instructor, Muteki Kyokushin
          </h3>
          <p className="lead mb-3">
            Shihan Rene Cruz is the owner and head instructor of Muteki
            Kyokushin Karate. With decades of experience in Kyokushin and a
            lifelong dedication to martial arts, Shihan Cruz brings a wealth of
            knowledge, discipline, and passion to every class.
          </p>
          <p>
            His approach blends traditional Kyokushin values with a modern
            teaching style that empowers students of all backgrounds and
            abilities. Shihan Cruz believes in fostering a respectful,
            supportive environment where every student can grow in strength,
            confidence, and character. His classes focus on practical
            self-defense, physical fitness, and the true spirit of Kyokushin:
            perseverance, humility, and community.
          </p>
        </div>
        <div className="col-lg-6 col-12 text-center">
          <img
            src={instructorImg}
            alt="Portrait of Shihan Rene Cruz, head instructor"
            className="img-fluid rounded instructor-section__img"
            style={{
              maxHeight: 650,
              maxWidth: 520,
              width: "100%",
              objectFit: "cover",
              margin: "0 auto",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Instructor;
