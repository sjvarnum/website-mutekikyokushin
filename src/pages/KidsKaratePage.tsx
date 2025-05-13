import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import kidsImg from "../assets/kids.jpg";
import kidsImg2 from "../assets/kids-2.jpg";
import kidsImg3 from "../assets/kids-3.jpg";
import kidsImg4 from "../assets/kids-4.jpg";
import kidsImg5 from "../assets/kids-5.jpg";

const KidsKaratePage: React.FC = () => (
  <>
    <Navigation />
    {/* Hero Section */}
    <section className="kids-karate-hero theme-bg-blue text-light py-5 min-vh-75">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row">
          <div className="col-lg-6 col-12 text-center">
            <img
              src={kidsImg}
              alt="Kids practicing karate at Muteki Kyokushin dojo"
              className="img-fluid rounded mb-4 mb-lg-0 kids-image"
              style={{
                width: "100%",
                height: "400px",
                maxWidth: 600,
                objectFit: "cover",
                margin: "0 auto",
              }}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 col-12">
            <h1 className="display-4 theme-text-red mb-3">
              Kids Karate Program
            </h1>
            <h2 className="h5 theme-text-light mb-4">
              Building Confidence, Focus, and Fun
            </h2>
            <p className="lead mb-3">
              Our Kids Karate program is designed to help children develop
              discipline, respect, and physical fitness in a fun and supportive
              environment. Classes are tailored for all ages and abilities.
            </p>
            <ul className="mb-4">
              <li>Safe, age-appropriate instruction</li>
              <li>Focus on self-confidence and teamwork</li>
              <li>Experienced, caring instructors</li>
              <li>Opportunities for growth and leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Section 1 */}
    <section className="kids-karate-section bg-white border-bottom py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h2 className="h3 theme-text-red mb-2">Why Kids Love Karate</h2>
            <p className="mb-2">
              Karate classes are energetic, engaging, and packed with activities
              that keep kids moving and learning. Our curriculum emphasizes
              positive reinforcement and personal achievement.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img
              src={kidsImg2}
              alt="Kids practicing karate at Muteki Kyokushin dojo"
              className="img-fluid rounded mb-4 mb-lg-0 kids-image"
              style={{
                width: "100%",
                height: "400px",
                maxWidth: 600,
                objectFit: "cover",
                margin: "0 auto",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Section 2 */}
    <section className="kids-karate-section bg-light border-bottom py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row-reverse flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h2 className="h3 theme-text-red mb-2">Character & Life Skills</h2>
            <p className="mb-2">
              Through karate, children learn respect, perseverance, and
              responsibility. These life skills extend beyond the dojo, helping
              them succeed at school and at home.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img
              src={kidsImg3}
              alt="Kids practicing karate at Muteki Kyokushin dojo"
              className="img-fluid rounded mb-4 mb-lg-0 kids-image"
              style={{
                width: "100%",
                height: "400px",
                maxWidth: 600,
                objectFit: "cover",
                margin: "0 auto",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="kids-karate-section bg-white border-bottom py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h2 className="h3 theme-text-red mb-2">
              Physical Fitness & Safety
            </h2>
            <p className="mb-2">
              Our program builds strength, coordination, and flexibility. Safety
              is always a priority, with classes designed to be both challenging
              and appropriate for each age group.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img
              src={kidsImg4}
              alt="Kids practicing karate at Muteki Kyokushin dojo"
              className="img-fluid rounded mb-4 mb-lg-0 kids-image"
              style={{
                width: "100%",
                height: "400px",
                maxWidth: 600,
                objectFit: "cover",
                margin: "0 auto",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Section 4 */}
    <section className="kids-karate-section bg-light border-bottom py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row-reverse flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h2 className="h3 theme-text-red mb-2">Join Our Karate Family</h2>
            <p className="mb-2">
              Every child is welcomed and encouraged. Our dojo is a place where
              friendships are made and every student is valued. Try a free class
              today!
            </p>
            <a href="/#contact" className="btn btn-solid-blue btn-lg mt-3">
              Contact Us
            </a>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img
              src={kidsImg5}
              alt="Kids practicing karate at Muteki Kyokushin dojo"
              className="img-fluid rounded mb-4 mb-lg-0 kids-image"
              style={{
                width: "100%",
                height: "400px",
                maxWidth: 600,
                objectFit: "cover",
                margin: "0 auto",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default KidsKaratePage;
