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
            <h2 className="h3 theme-text-red mb-2">
              The Evolution of Women in Kyokushin
            </h2>
            <p className="mb-2">
              Kyokushin karate has transformed dramatically over the past
              decade. What was once a male-dominated martial art now proudly
              showcases women competing at the highest levels in semi-contact
              and knockdown kumite. This shift represents a remarkable evolution
              - while the first World Open Championships in Japan featured no
              women in kumite, today some of the world's most accomplished
              Kyokushin athletes are women. Champions like Agnieska Sypien (IKO1
              Poland), Alina Aldatova (IKO1 Russia), Julie Nadeau (IFK Canada),
              and Monelle Richards (Royama Canada) have become inspirational
              figures in the Kyokushin community, excelling not just in kumite
              but also in tameshiwari (breaking) and kata (forms).
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
              Self-Defense with Purpose
            </h2>
            <p className="mb-2">
              In Rochester and surrounding areas, where safety concerns are
              increasing, Kyokushin's full-contact approach provides women with
              practical and effective self-defense skills. The techniques taught
              in our dojo are designed for real-world application, giving women
              the confidence to protect themselves in potentially dangerous
              situations. Our training focuses on building both physical
              capability and mental resilience - essential components of
              effective self-defense.
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
            <h2 className="h3 theme-text-red mb-2">Fitness That Transforms</h2>
            <p className="mb-2">
              Kyokushin offers a comprehensive full-body workout that improves
              strength, flexibility, and endurance. Women training at our dojo
              experience significant improvements in physical fitness, whether
              their goals involve weight management, muscle toning, or overall
              conditioning. The intensive nature of Kyokushin training delivers
              results that many conventional fitness programs cannot match, all
              while developing valuable martial arts skills.
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
            <h2 className="h3 theme-text-red mb-2">A Community of Strength</h2>
            <p className="mb-2">
              At our dojo, women train at every level from white belt beginners
              to accomplished black belts. Some focus on competition, while
              others pursue personal fitness and self-improvement without ever
              entering the ring. This diversity creates a supportive community
              where women can define their own martial arts journey. Whether
              you're interested in becoming a knockdown champion or simply want
              to maintain a healthy lifestyle, our extensive training
              environment welcomes you.
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
