// BackToTop.jsx
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  // Pokazuj przycisk po zjechaniu strony poniżej slidera
  useEffect(() => {
    const handleScroll = () => {
      const sliderHeight = document.querySelector(".fullscreen-slider")?.offsetHeight || 0;
      setShow(window.scrollY > sliderHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          whileHover={{ y: -4, scale: 1.05 }} // efekt unoszenia i lekkiego powiększenia
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#00A84F] shadow-lg hover:bg-green-700 flex items-center justify-center"
        >
          {/* Gruba strzałka skierowana w górę */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 18 V8 M12 8 L6 14 M12 8 L18 14"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
