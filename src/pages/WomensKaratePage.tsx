import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const WomensKaratePage: React.FC = () => (
  <>
    <Navigation />
    {/* Hero Section */}
    <section className="womens-karate-hero theme-bg-blue text-light py-5 min-vh-75">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row-reverse flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h1 className="display-4 theme-text-red mb-3">Women's Karate Program</h1>
            <h2 className="h5 theme-text-light mb-4">Empowerment, Fitness, and Community</h2>
            <p className="lead mb-3">
              Our Women's Karate program is designed to inspire confidence, self-defense, and lifelong fitness. Join a welcoming community and discover your strength.
            </p>
            <ul className="mb-4">
              <li>Supportive, inclusive environment</li>
              <li>Expert female and male instructors</li>
              <li>Focus on fitness, self-defense, and empowerment</li>
              <li>Classes for all experience levels</li>
            </ul>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <div className="img-fluid rounded bg-secondary bg-opacity-10 womens-karate-hero__image d-flex align-items-center justify-content-center mx-auto mb-2 mb-lg-0" style={{width: '100%', maxWidth: 400, height: 300}}>
              <span className="text-muted">[Women's Karate Hero Image]</span>
            </div>
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
            <p className="mb-2">Karate offers a unique blend of physical fitness, mental resilience, and self-defense skills. Our classes are designed to be empowering, challenging, and fun.</p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <div className="img-fluid rounded bg-secondary bg-opacity-10 womens-karate-section__image d-flex align-items-center justify-content-center mx-auto mb-2 mb-lg-0" style={{width: '100%', maxWidth: 400, height: 220}}>
              <span className="text-muted">[Section 1 Image]</span>
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
            <h2 className="h3 theme-text-red mb-2">Self-Defense & Confidence</h2>
            <p className="mb-2">Learn practical self-defense techniques and build confidence in a safe and encouraging environment. Our program is tailored to empower women of all backgrounds.</p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <div className="img-fluid rounded bg-secondary bg-opacity-10 womens-karate-section__image d-flex align-items-center justify-content-center mx-auto mb-2 mb-lg-0" style={{width: '100%', maxWidth: 400, height: 220}}>
              <span className="text-muted">[Section 2 Image]</span>
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
            <p className="mb-2">Karate is a full-body workout that improves strength, flexibility, and endurance. Our classes are designed to help you achieve your fitness goals at any level.</p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <div className="img-fluid rounded bg-secondary bg-opacity-10 womens-karate-section__image d-flex align-items-center justify-content-center mx-auto mb-2 mb-lg-0" style={{width: '100%', maxWidth: 400, height: 220}}>
              <span className="text-muted">[Section 3 Image]</span>
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
            <h2 className="h3 theme-text-red mb-2">Join Our Women's Karate Community</h2>
            <p className="mb-2">Experience camaraderie, support, and personal growth. Our dojo is a space where women encourage each other and celebrate every achievement. Try a free class today!</p>
            <a href="/#contact" className="btn btn-solid-blue btn-lg mt-3">Contact Us</a>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <div className="img-fluid rounded bg-secondary bg-opacity-10 womens-karate-section__image d-flex align-items-center justify-content-center mx-auto mb-2 mb-lg-0" style={{width: '100%', maxWidth: 400, height: 220}}>
              <span className="text-muted">[Section 4 Image]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default WomensKaratePage;
