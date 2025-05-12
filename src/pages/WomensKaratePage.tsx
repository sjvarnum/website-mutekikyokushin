import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import womenImg from "../assets/women.jpg";
import womenImg2 from "../assets/women-2.jpg";
import womenImg3 from "../assets/women-3.jpg";
import womenImg4 from "../assets/women-4.jpg";
import womenImg5 from "../assets/women-5.jpg";
import "./WomensKaratePage.css";

const WomensKaratePage: React.FC = () => (
  <>
    <Navigation />
    {/* Hero Section */}
    <section className="womens-karate-hero theme-bg-blue text-light py-5 min-vh-75">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row-reverse flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h1 className="display-4 theme-text-red mb-3">
              Women's Karate Program
            </h1>
            <h2 className="h5 theme-text-light mb-4">
              Empowerment, Fitness, and Community
            </h2>
            <p className="lead mb-3">
              Our Women's Karate program is designed to inspire confidence,
              self-defense, and lifelong fitness. Join a welcoming community and
              discover your strength.
            </p>
            <ul className="mb-4">
              <li>Supportive environment</li>
              <li>Expert instructors</li>
              <li>Focus on fitness, self-defense, and empowerment</li>
              <li>Classes for all experience levels</li>
            </ul>
          </div>
          <div className="col-lg-6 col-12 text-center">
            
              <img
                src={womenImg}
                alt="Women practicing karate"
                className="img-fluid rounded"
                style={{
                  width: "100%",
                  height: "400px",
                  maxWidth: 600,
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
          </div>
        </div>
      </div>
    </section>

    {/* Section 1 */}
    <section className="womens-karate-section bg-white border-bottom py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h2 className="h3 theme-text-red mb-2">Why Women Choose Karate</h2>
            <p className="mb-2">
              Karate offers a unique blend of physical fitness, mental
              resilience, and self-defense skills. Our classes are designed to
              be empowering, challenging, and fun.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <div className="womens-karate-section__image">
              <img
                src={womenImg2}
                alt="Women practicing karate"
                className="img-fluid rounded"
                style={{
                  width: "100%",
                  height: "400px",
                  maxWidth: 600,
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 2 */}
    <section className="womens-karate-section bg-light border-bottom py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row-reverse flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h2 className="h3 theme-text-red mb-2">
              Self-Defense & Confidence
            </h2>
            <p className="mb-2">
              Learn practical self-defense techniques and build confidence in a
              safe and encouraging environment. Our program is tailored to
              empower women of all backgrounds.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <div className="womens-karate-section__image">
              <img
                src={womenImg3}
                alt="Women practicing karate"
                className="img-fluid rounded"
                style={{
                  width: "100%",
                  height: "400px",
                  maxWidth: 600,
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="womens-karate-section bg-white border-bottom py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h2 className="h3 theme-text-red mb-2">Fitness & Wellness</h2>
            <p className="mb-2">
              Karate is a full-body workout that improves strength, flexibility,
              and endurance. Our classes are designed to help you achieve your
              fitness goals at any level.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <div className="womens-karate-section__image">
              <img
                src={womenImg4}
                alt="Women practicing karate"
                className="img-fluid rounded"
                style={{
                  width: "100%",
                  height: "400px",
                  maxWidth: 600,
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 4 */}
    <section className="womens-karate-section bg-light border-bottom py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row-reverse flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h2 className="h3 theme-text-red mb-2">
              Join Our Women's Karate Community
            </h2>
            <p className="mb-2">
              Experience camaraderie, support, and personal growth. Our dojo is
              a space where women encourage each other and celebrate every
              achievement. Try a free class today!
            </p>
            <a href="/#contact" className="btn btn-solid-blue btn-lg mt-3">
              Contact Us
            </a>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <div className="womens-karate-section__image">
              <img
                src={womenImg5}
                alt="Women practicing karate"
                className="img-fluid rounded"
                style={{
                  width: "100%",
                  height: "400px",
                  maxWidth: 600,
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default WomensKaratePage;
