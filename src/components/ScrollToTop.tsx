import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const initialPath = useRef(pathname);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    if (pathname === initialPath.current) return;

    const timeouts = [0, 100, 250, 500].map((ms) =>
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, ms)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [pathname]);

  return null;
}
