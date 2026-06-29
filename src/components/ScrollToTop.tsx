import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    let raf = 0;
    const stopAt = performance.now() + 500;

    const keepTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      if (performance.now() < stopAt) {
        raf = requestAnimationFrame(keepTop);
      }
    };

    raf = requestAnimationFrame(keepTop);

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
