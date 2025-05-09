import React from "react";
// import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import karateImg from "../assets/masutatsu-oyama.jpg";
import karateImg2 from "../assets/masutatsu-oyama-2.jpg";
import karateImg3 from "../assets/masutatsu-oyama-3.jpg";
import karateImg4 from "../assets/masutatsu-oyama-4.jpg";

const KaratePage: React.FC = () => (
  <>
    <Navigation />

    <section className="karate-page-section theme-bg-blue text-light py-5 min-vh-75">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row flex-lg-row-reverse flex-column-reverse">          
          <div className="col-lg-6 col-12">
            <h1 className="display-4 theme-text-red mb-3">About Kyokushin Karate</h1>
            <h2 className="h5 theme-text-light mb-4">The Strongest Karate - Tradition & Spirit</h2>
            <p className="lead mb-3">
              Kyokushin (極真) means "Ultimate Truth." Founded by Masutatsu Oyama, Kyokushin is known worldwide for its rigorous full-contact training, discipline, and strong spirit. Practitioners build not only physical strength, but also mental resilience and respect for others.
            </p>
            <p>
              At Muteki Kyokushin, we uphold the traditions of Japanese karate while fostering a welcoming, inclusive environment. Whether you are a beginner or an advanced student, our dojo provides world-class instruction, opportunities for competition, and a supportive community to help you achieve your goals.
            </p>
            <ul className="mb-4">
              <li>Authentic full-contact Kyokushin curriculum</li>
              <li>Experienced, internationally certified instructors</li>
              <li>Direct connection to Japan and global Kyokushin network</li>
              <li>Classes for all ages and abilities</li>
              <li>Focus on character, discipline, and personal growth</li>
            </ul>
            {/* <Link to="/" className="btn btn-outline-red btn-lg mt-2">
              ← Back to Home
            </Link> */}
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img
              src={karateImg}
              alt="Mas Oyama demonstrating Kyokushin karate"
              className="img-fluid rounded karate-page-section__image mb-2 mb-lg-0"
              style={{ maxHeight: 500, objectFit: 'cover', margin: '0 auto' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* --- Early Life Section --- */}
    <section className="karate-page-section__early-life bg-white border-bottom py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h2 className="h3 theme-text-red mb-2">Early Life & Martial Beginnings</h2>
            <h3 className="h6 theme-text-blue mb-3">Korea, China, and Japan</h3>
            <p className="mb-2">
              Masutatsu (Mas) Oyama was born Yong I-Choi in 1923 in Southern Korea. He began his martial arts journey at age 9, learning Southern Chinese Kempo while living in Manchuria. Returning to Korea, he continued training in Korean Kempo, and by 15, moved to Japan to pursue aviation and further martial arts studies.
            </p>
            <p className="mb-2">
              In Japan, Oyama trained in judo, boxing, and Shotokan Karate under Gichin Funakoshi. By age 17, he was a 2nd dan, and by 20, a 4th dan. He also achieved 4th dan in Judo within four years.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img
              src={karateImg2}
              alt="Mas Oyama early life martial arts training"
              className="img-fluid rounded karate-page-section__image mb-2 mb-lg-0"
              style={{ maxHeight: 500, objectFit: 'cover', margin: '0 auto', width: '100%', maxWidth: 400 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* --- Mountain Training Section --- */}
    <section className="karate-page-section__mountain bg-light border-bottom py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row flex-lg-row-reverse flex-column-reverse">
          <div className="col-lg-6 col-12 order-lg-1">
            <h2 className="h3 theme-text-red mb-2">Mountain Training & The Way of the Samurai</h2>
            <h3 className="h6 theme-text-blue mb-3">Discipline, Solitude, and Strength</h3>
            <p className="mb-2">
              Inspired by the Bushido code and the novel "Musashi," Oyama undertook intense solitary training in the mountains. Enduring harsh conditions, he refined his body and mind, practicing 12 hours a day, breaking river stones, and meditating under waterfalls. This period forged his legendary strength and unwavering spirit.
            </p>
            <p className="mb-2">
              After 18 months, Oyama emerged with a new sense of confidence and purpose, setting the foundation for what would become Kyokushin Karate.
            </p>
          </div>
          <div className="col-lg-6 col-12 order-lg-2 text-center">
            <img
              src={karateImg3}
              alt="Mas Oyama mountain training karate"
              className="img-fluid rounded karate-page-section__image mb-2 mb-lg-0"
              style={{ maxHeight: 400, objectFit: 'cover', margin: '0 auto', width: '100%', maxWidth: 600 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* --- Kyokushin Legacy Section --- */}
    <section className="karate-page-section__legacy bg-white py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row">
        <div className="col-lg-6 col-12 order-lg-2 text-center">
            <img
              src={karateImg4}
              alt="Mas Oyama mountain training karate"
              className="img-fluid rounded karate-page-section__image mb-2 mb-lg-0"
              style={{ maxHeight: 400, objectFit: 'cover', margin: '0 auto', width: '100%', maxWidth: 600 }}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 col-12">
            <h2 className="h3 theme-text-red mb-2">Kyokushin Legacy</h2>
            <h3 className="h6 theme-text-blue mb-3">Ultimate Truth & Global Impact</h3>
            <p className="mb-2">
              In 1964, Oyama officially opened the Kyokushin World Headquarters in Tokyo, naming his style "Kyokushin"—Ultimate Truth. Today, Kyokushin is practiced in over 120 countries with millions of members, known for its rigorous full-contact approach and strong ethical code.
            </p>
            <p className="mb-2">
              Oyama's legacy lives on through the global Kyokushin community, inspiring generations to pursue strength, respect, and self-improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* --- CTA Section --- */}
    <section className="karate-page-section__cta theme-bg-blue py-5 border-top">
      <div className="container text-center">
        <h2 className="display-6 theme-text-red mb-3">Ready to Experience Kyokushin?</h2>
        <p className="lead mb-4 theme-text-white">
          Visit our Rochester dojo and discover the power, discipline, and community of Muteki Kyokushin. Beginners and all levels welcome!
        </p>
        <a href="/#contact" className="btn btn-solid-red btn-lg shadow">
          Contact Us
        </a>
      </div>
    </section>
    <Footer />
  </>
);

export default KaratePage;