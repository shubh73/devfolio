import { useState, useEffect } from "react";

export function useViewport() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      const { innerHeight, orientation } = window;

      const result =
        typeof orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      setIsDesktop(result);
      setClientHeight(innerHeight);
    }

    // Set scroll restoration to manual
    if (typeof window !== "undefined" && window.history) {
      window.history.scrollRestoration = "manual";
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isDesktop, clientHeight };
}
