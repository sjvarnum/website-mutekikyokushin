import React, { useState, useEffect } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";

// Sample reviews data
const reviews = [
  {
    author: "Wesley W.",
    text: "Fantastic Dojo. René Cruz is a shihan with a lot of knowledge. An amazing place to train and the tournaments they organize are out of this world 💪🏼🔥",
    rating: 5,
  },
  {
    author: "Noelia G.",
    text: "This is an amazing place to learn karate! My son and I attend and it has been an excellent and wonderful experience.",
    rating: 5,
  },
  {
    author: "Lisa T.",
    text: "I went to my first class two weeks ago and I recommend it! From young ages to older, this gym will make you sweat!",
    rating: 5,
  },
  {
    author: "Nik O.",
    text: "We had a session there and I really enjoyed it as well as the dojo. Had I lived in Rochester, I would have trained there regularly.",
    rating: 5,
  },
  {
    author: "Khalie P.",
    text: "Amazing place to learn karate, the sensei shows a lot of discipline, good place for starters. Goes by all ages, very clean.",
    rating: 5,
  },
  {
    author: "Frenchi W.",
    text: "Been going here for a while, a very well rounded fitness program 3 days a week at a good price. The focused and dedicated instructors really make you feel attended to and accomplished.",
    rating: 5,
  },
  {
    author: "Ferry W.",
    text: "Amazing place to learn karate, the sensei shows a lot of discipline, good place for starters. Goes by all ages, very clean.",
    rating: 5,
  },
  {
    author: "Johnny G.",
    text: "My son has been going here three years and has enjoyed the wonderful atmosphere also he loves the feel of being a part of a family...",
    rating: 5,
  },
];

const GoogleReviews: React.FC = () => {
  const getVisibleCount = () => (window.innerWidth < 992 ? 1 : 4);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - visibleCount, 0));
  };
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount < reviews.length ? prev + visibleCount : prev
    );
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + visibleCount >= reviews.length;

  return (
    <section className="theme-bg-red text-light py-4 border-bottom">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0 fw-bold">What Our Students Say</h3>
          <div>
            <button
              className="btn btn-outline-light btn-sm me-2"
              onClick={handlePrev}
              disabled={isPrevDisabled}
              aria-label="Previous reviews"
            >
              &#8592;
            </button>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={handleNext}
              disabled={isNextDisabled}
              aria-label="Next reviews"
            >
              &#8594;
            </button>
          </div>
        </div>
        <div className="row g-3 justify-content-center">
          {visibleReviews.map((review, idx) => (
            <div className="col-12 col-lg-3" key={currentIndex + idx}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column align-items-start">
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`me-1 ${i < review.rating ? "text-warning" : "text-secondary"}`}
                        aria-label={i === 0 ? `${review.rating} star rating` : undefined}
                      />
                    ))}
                  </div>
                  <p className="card-text flex-grow-1">"{review.text}"</p>
                  <div className="fw-semibold theme-text-blue">- {review.author}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      {/* See more reviews button */}
      <div className="mt-4 text-start">
        <a
          href="https://g.co/kgs/MAathv5"
          className="btn theme-bg-blue text-light px-4 py-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="See more reviews on Google"
        >
          See more Google reviews <FaArrowRight />
        </a>
      </div>
    </div>
  </section>
  );
};

export default GoogleReviews;