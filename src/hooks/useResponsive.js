import { useCallback, useEffect, useState } from "react";

export const useIsResponsive = (breakpoint) => {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleResize = useCallback(() => {
    setIsResponsive(window.innerWidth <= breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let resizeTimeout;

    const debounceResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 0);
    };

    window.addEventListener("resize", debounceResize);

    // Initial call after mounting to set the correct value based on current screen width
    handleResize();

    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, [handleResize]);

  return isResponsive;
};
