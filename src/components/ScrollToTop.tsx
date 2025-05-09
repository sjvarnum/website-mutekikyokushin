import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top of the page on route change (if no hash).
 */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
