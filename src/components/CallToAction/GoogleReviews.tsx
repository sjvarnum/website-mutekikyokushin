import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

// Sample reviews data
const reviews = [
  {
    author: "Jane D.",
    text: "Fantastic dojo! The instructors are knowledgeable and welcoming. My kids love it here!",
    rating: 5,
  },
  {
    author: "Mike S.",
    text: "Great community and top-notch Kyokushin training. Highly recommend for all ages.",
    rating: 5,
  },
  {
    author: "Lisa T.",
    text: "Supportive environment and excellent teaching. I've grown so much in skill and confidence.",
    rating: 5,
  },
  {
    author: "Chris P.",
    text: "Clean facility, friendly people, and real results. The best martial arts school in the area!",
    rating: 5,
  },
  {
    author: "Ava K.",
    text: "My whole family trains here. The sense of community is amazing!",
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
      </div>
    </section>
  );
};

export default GoogleReviews;