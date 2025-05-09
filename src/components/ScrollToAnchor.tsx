import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls smoothly to the anchor specified in the URL hash on route change.
 */
const ScrollToAnchor: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Scroll to the element first (smooth)
        el.scrollIntoView({ behavior: "smooth" });
        // After a short delay, offset for the sticky navbar
        setTimeout(() => {
          const navbar = document.querySelector(".navigation.sticky-top");
          const navbarHeight = navbar ? (navbar as HTMLElement).offsetHeight : 0;
          if (navbarHeight > 0) {
            window.scrollBy({ top: -navbarHeight, left: 0, behavior: "instant" });
          }
        }, 400); // Delay matches smooth scroll duration
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToAnchor;
