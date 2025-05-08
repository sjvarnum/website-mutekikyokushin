import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Placeholder news/events data
const featuredItems = [
  {
    id: 1,
    title: "Ring Wars 2025 Announced!",
    date: "2025-06-15",
    description: "Join us for the annual Ring Wars tournament. Open to all ages and levels!",
    image: null,
    link: "#",
  },
  {
    id: 2,
    title: "Kids Belt Promotion Results",
    date: "2025-05-01",
    description: "Congratulations to all our young karatekas who earned new belts this spring!",
    image: null,
    link: "#",
  },
  {
    id: 3,
    title: "Guest Instructor: Shihan Yamada",
    date: "2025-04-20",
    description: "Special seminar with Shihan Yamada from Japan. Don’t miss this unique opportunity!",
    image: null,
    link: "#",
  },
];

const gridItems = [
  {
    id: 4,
    title: "Dojo Closed for Holiday",
    date: "2025-07-04",
    description: "The dojo will be closed for Independence Day. Enjoy your holiday and stay safe!",
    image: null,
    link: "#",
  },
  {
    id: 5,
    title: "New Women's Self-Defense Class",
    date: "2025-06-10",
    description: "Launching a new self-defense class for women. Register now—spaces are limited!",
    image: null,
    link: "#",
  },
  {
    id: 6,
    title: "Spring Cleaning Volunteer Day",
    date: "2025-05-20",
    description: "Help us keep the dojo sparkling! Volunteers needed for our annual cleanup.",
    image: null,
    link: "#",
  },
];

const AUTO_ADVANCE_INTERVAL = 6000; // ms

const NewsEvents: React.FC = () => {
  const [current, setCurrent] = useState(0);
  // Use number for timeout ref in browser
  const timeoutRef = useRef<number | null>(null);

  // Auto-advance carousel
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % featuredItems.length);
    }, AUTO_ADVANCE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  // Manual navigation
  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  const next = () => setCurrent((prev) => (prev + 1) % featuredItems.length);

  return (
    <section className="news-events-section bg-white py-5 border-bottom">
      <div className="container">
        <h2 className="fw-bold display-6 mb-3 text-center">News & Events</h2>
        <p className="text-center text-muted mb-4">
          Stay up to date with the latest happenings at Muteki Kyokushin!
        </p>
        {/* Carousel */}
        <div className="position-relative mb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="card flex-row flex-md-row flex-column align-items-center shadow-sm overflow-hidden">
                {/* Image placeholder */}
                <div className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-25" style={{ minWidth: 150, minHeight: 150, width: 180, height: 180 }}>
                  <span className="text-muted fw-semibold">Image Placeholder</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{featuredItems[current].title}</h5>
                  <div className="small text-muted mb-2">{new Date(featuredItems[current].date).toLocaleDateString()}</div>
                  <p className="card-text mb-2">{featuredItems[current].description}</p>
                  <a href={featuredItems[current].link} className="btn btn-primary btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel controls: Desktop (arrows at sides) */}
          <button
            className="btn btn-outline-secondary position-absolute top-50 start-0 translate-middle-y ms-2 d-none d-md-block"
            style={{ zIndex: 2 }}
            onClick={prev}
            aria-label="Previous featured event"
          >
            <FaChevronLeft />
          </button>
          <button
            className="btn btn-outline-secondary position-absolute top-50 end-0 translate-middle-y me-2 d-none d-md-block"
            style={{ zIndex: 2 }}
            onClick={next}
            aria-label="Next featured event"
          >
            <FaChevronRight />
          </button>
          {/* Carousel controls: Mobile (arrows below, centered) */}
          <div className="d-flex justify-content-center align-items-center gap-3 mt-3 d-md-none">
            <button
              className="btn btn-outline-secondary"
              onClick={prev}
              aria-label="Previous featured event"
            >
              <FaChevronLeft />
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={next}
              aria-label="Next featured event"
            >
              <FaChevronRight />
            </button>
          </div>
          {/* Dots */}
          <div className="d-flex justify-content-center mt-2">
            {featuredItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`mx-1 btn btn-sm rounded-circle ${idx === current ? "btn-primary" : "btn-outline-secondary"}`}
                style={{ width: 12, height: 12, padding: 0 }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Card Grid */}
        <div className="row g-4">
          {gridItems.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <div className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-25" style={{ minHeight: 140 }}>
                  <span className="text-muted fw-semibold">Image Placeholder</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <div className="small text-muted mb-2">{new Date(item.date).toLocaleDateString()}</div>
                  <p className="card-text mb-2">{item.description}</p>
                  <a href={item.link} className="btn btn-outline-primary btn-sm mt-auto align-self-start">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div className="text-center mt-4">
          <a href="#" className="btn btn-secondary btn-lg">
            View All News & Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
