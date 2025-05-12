import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface CarouselCardItem {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  date?: string;
}

interface CarouselCardsProps {
  items: CarouselCardItem[];
  autoScrollInterval?: number; // ms
}

const AUTO_SCROLL_ENABLED = false; // Set to true to enable auto-scroll

const CarouselCards: React.FC<CarouselCardsProps> = ({ items, autoScrollInterval = 5000 }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Determine number of cards per view
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll (controlled by AUTO_SCROLL_ENABLED flag)
  useEffect(() => {
    if (!AUTO_SCROLL_ENABLED) return;
    if (items.length <= cardsPerView) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + cardsPerView) % items.length);
    }, autoScrollInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items.length, cardsPerView, autoScrollInterval]);

  const prev = () => {
    setIndex((prevIdx) => {
      let newIdx = prevIdx - cardsPerView;
      if (newIdx < 0) newIdx = items.length - cardsPerView;
      return newIdx;
    });
  };

  const next = () => {
    setIndex((prevIdx) => (prevIdx + cardsPerView) % items.length);
  };

  // Get the cards to display
  const visibleCards = [];
  for (let i = 0; i < cardsPerView; i++) {
    const itemIdx = (index + i) % items.length;
    visibleCards.push(items[itemIdx]);
  }

  return (
    <section className="carousel-cards-section py-4">
      <div className="container">
        <div className="d-none d-md-flex align-items-center justify-content-center" style={{ width: '100%' }}>
          <button
            className="btn btn-outline-blue me-3"
            style={{ zIndex: 2 }}
            onClick={prev}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <div className="carousel-cards my-2">
              <div className="row justify-content-center align-items-stretch g-3">
                {visibleCards.map((item) => (
                  <div className="col-12 col-md-6" key={item.id}>
                    <div className="card h-100 shadow-sm">
                      {item.image && (
                        <img src={item.image} alt={item.title} className="card-img-top" style={{ objectFit: "cover", maxHeight: 400 }} />
                      )}
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold">{item.title}</h5>
                        {item.date && <div className="small text-muted mb-2">{new Date(item.date).toLocaleDateString()}</div>}
                        {/* <p className="card-text flex-grow-1">{item.description}</p> */}
                        {/* {item.link && (
                          <a href={item.link} className="btn btn-solid-blue btn-sm mt-2 align-self-start">
                            Read More
                          </a>
                        )} */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Carousel controls: Mobile (arrows below, centered) */}
              <div className="d-flex justify-content-center align-items-center gap-3 mt-3 d-md-none">
                <button className="btn btn-outline-blue" onClick={prev} aria-label="Previous">
                  <FaChevronLeft />
                </button>
                <button className="btn btn-outline-blue" onClick={next} aria-label="Next">
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
          <button
            className="btn btn-outline-blue ms-3"
            style={{ zIndex: 2 }}
            onClick={next}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
        {/* Mobile layout: just the cards and arrows below */}
        <div className="d-block d-md-none">
          <div className="col-12 mx-auto">
            <div className="carousel-cards my-2">
              <div className="row justify-content-center align-items-stretch g-3">
                {visibleCards.map((item) => (
                  <div className="col-12" key={item.id}>
                    <div className="card h-100 shadow-sm">
                      {item.image && (
                        <img src={item.image} alt={item.title} className="card-img-top" style={{ objectFit: "cover", maxHeight: 400 }} />
                      )}
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold">{item.title}</h5>
                        {item.date && <div className="small text-muted mb-2">{new Date(item.date).toLocaleDateString()}</div>}
                        {/* <p className="card-text flex-grow-1">{item.description}</p> */}
                        {/* {item.link && (
                          <a href={item.link} className="btn btn-solid-blue btn-sm mt-2 align-self-start">
                            Read More
                          </a>
                        )} */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                <button className="btn btn-outline-blue" onClick={prev} aria-label="Previous">
                  <FaChevronLeft />
                </button>
                <button className="btn btn-outline-blue" onClick={next} aria-label="Next">
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselCards;
