import { useState, useEffect } from "react";
import { calculateGradient } from "../utils/calculate-gradient";

export const useGradientBackground = () => {
  const [background, setBackground] = useState(
    "linear-gradient(to bottom, rgba(23, 96, 159, 0.3), white)"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      setBackground(calculateGradient(scrollY));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return background;
};
