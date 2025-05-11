import React, { useState } from "react";
import "./GalleryCarousel.css";

const galleryImages = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-7.jpg",
  "gallery-8.jpg",
  "gallery-9.jpg",
  "gallery-10.jpg",
  "gallery-11.jpg",
  "gallery-12.jpg",
  "gallery-13.jpg",
  "gallery-14.jpg",
  "gallery-15.png",
  "gallery-16.png",
  "gallery-17.png",
  "gallery-18.png",
  "gallery-19.png",
  "gallery-20.png",
  "gallery-21.png",
  "gallery-22.png",
  "gallery-23.png",
  "gallery-24.png",
  "gallery-25.png",

  // Add more filenames here as you add images to /public/gallery
];

const GalleryCarousel: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);

  // Responsive: 4 desktop, 2 tablet, 1 mobile
  const getImagesPerView = () => {
    if (window.innerWidth >= 992) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [imagesPerView, setImagesPerView] = useState(getImagesPerView());

  React.useEffect(() => {
    const handleResize = () => setImagesPerView(getImagesPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const endIdx = startIdx + imagesPerView;
  const visibleImages = galleryImages.slice(startIdx, endIdx);

  const canGoBack = startIdx > 0;
  const canGoForward = endIdx < galleryImages.length;

  const next = () => {
    if (canGoForward) setStartIdx(startIdx + 1);
  };
  const prev = () => {
    if (canGoBack) setStartIdx(startIdx - 1);
  };

  return (
    <section className="gallery-carousel container py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button
          className="btn btn-outline-danger gallery-carousel__arrow"
          onClick={prev}
          disabled={!canGoBack}
          aria-label="Previous images"
        >
          &#8592;
        </button>
        <div className="row flex-nowrap w-100 mx-2">
          {visibleImages.map((img, idx) => (
            <div
              className={`gallery-carousel__img-col col-12 col-md-6 col-lg-3 px-1`}
              key={img}
            >
              <img
                src={`/gallery/${img}`}
                alt={`Gallery image ${startIdx + idx + 1}`}
                className="img-fluid rounded gallery-carousel__img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <button
          className="btn btn-outline-danger gallery-carousel__arrow"
          onClick={next}
          disabled={!canGoForward}
          aria-label="Next images"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default GalleryCarousel;
