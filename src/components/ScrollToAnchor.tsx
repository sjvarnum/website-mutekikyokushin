import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls smoothly to the anchor specified in the URL hash on route change.
 */
const ScrollToAnchor: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove the '#' and try to scroll to the element
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToAnchor;
