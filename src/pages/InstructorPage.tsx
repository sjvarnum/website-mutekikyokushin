import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import instructorImg from "../assets/instructor.jpg";
import aboutImg from "../assets/about.jpg";
import shihanSigImg from "../assets/shihan-sig.jpg";

const InstructorPage: React.FC = () => (
  <>
    <Navigation />
    {/* --- Hero/Intro Section --- */}
    <section className="instructor-page-section theme-bg-blue text-light py-5 min-vh-75">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row flex-lg-row-reverse flex-column-reverse">
          <div className="col-lg-6 col-12">
            <h1 className="display-4 theme-text-red mb-3">
              Meet Shihan Rene Cruz
            </h1>
            <h2 className="h5 theme-text-light mb-4">
              Head Instructor & Founder of Muteki Kyokushin
            </h2>
            <p className="lead mb-3">
              Shihan Rene Cruz is a dedicated martial artist and teacher with
              decades of experience in Kyokushin Karate. His journey is marked
              by a passion for discipline, growth, and community.
            </p>
            <p>
              As the heart of Muteki Kyokushin, Shihan Cruz inspires students of
              all ages to pursue excellence, resilience, and respect—both on and
              off the mat. His leadership and vision have shaped a dojo where
              tradition meets modern teaching, and every student is empowered to
              reach their full potential.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img
              src={instructorImg}
              alt="Portrait of Shihan Rene Cruz, head instructor"
              className="img-fluid rounded instructor-page-section__image mb-2 mb-lg-0"
              style={{
                maxHeight: 700,
                maxWidth: 600,
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

    {/* --- Instructor Main Section --- */}
    <section className="instructor-page-section__main bg-white border-bottom py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <img
              src={aboutImg}
              alt="Students and instructors at Muteki Kyokushin dojo"
              className="img-fluid rounded instructor-page-section__about-img shadow"
              style={{
                maxHeight: 500,
                width: "100%",
                objectFit: "cover",
                margin: "0 auto",
              }}
              loading="lazy"
            />
          </div>
        </div>
        <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
          <div className="col-12">
            <h2 className="h3 theme-text-blue mb-2">About Muteki Kyokushin</h2>
            <p>
              Welcome to Mas Oyamas Muteki Kyokushin, an authentic Japanese
              fighting karate school dedicated to training in Mas Oyama's
              Kyokushin style of full contact karate.
            </p>

            <h3 className="h4 theme-text-blue mb-3">
              Our Founder and Head Instructor
            </h3>
            <p>
              Founded and instructed by Shihan Rene Cruz, the dojo's focus is to
              strengthen the body, mind and spirit through quality physical
              training, while cultivating courtesy, respect, humility and an
              invincible fighting spirit.
            </p>

            <h3 className="h4 theme-text-blue mb-3">Competition Excellence</h3>
            <p>
              Our students and instructors train year round and frequently
              compete all over Japan, Europe, Canada and the US, in order to
              sharpen their skills. Our dojo has a ring proven record of success
              with our students going to the podium at every competition.
            </p>

            <p>
              Whether it's national or international competition, our students
              either place in each division or win the entire division in all
              events entered, therefore improving our student's self esteem.
            </p>

            <h3 className="h4 theme-text-blue mb-3">Global Connections</h3>

            <p>
              Our dojo also has guest instructors come in to teach as well as
              making international camps available to its students. Our dojo is
              linked directly to Japan, in one of the largest karate
              organizations in the world. Our instructors are certified &
              trained in Japan, the birthplace of karate.
            </p>

            <h3 className="h4 theme-text-blue mb-3">Programs for All Ages</h3>

            <p>
              Our kid's karate program is incredibly successful in developing respect, self-esteem, and confidence in children. We also offer dynamic adult and women's karate programs—empowering all ages with practical self-defense, fitness, and personal growth in a positive, supportive environment.
            </p>

            <h3 className="h4 theme-text-blue mb-3">Our Facility</h3>

            <p>
              Located in the Park Avenue area, the dojo has over 2000 square
              feet of space equipped with the best equipment on the market.
            </p>

            <p className="fw-bold">
              All are welcome to join us for the best training in town!
            </p>

            <img
              src={shihanSigImg}
              alt="Shihan Cruz teaching karate class"
              className="img-fluid rounded instructor-page-section__image mb-2 mb-lg-0"
              style={{
                maxHeight: 400,
                objectFit: "cover",
                margin: "0 auto",
                width: "100%",
                maxWidth: 400,
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

export default InstructorPage;
