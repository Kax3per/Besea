// FullscreenSlider.jsx
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

import besea1 from "../assets/images/img1.jpg";
import besea2 from "../assets/images/img2.jpg";
import besea3 from "../assets/images/img3.jpg";
import besea4 from "../assets/images/img4.jpg";

const slides = [
  {
    image: besea1,
    title: "Besea Team",
    description:
      "We transform facilities to low cost and low carbon operations through trusted engineering advice and Enterprise Software.",
    button: "Contact Us",
  },
  {
    image: besea2,
    title: "Enterprise Platform",
    description:
      "Our software solution can be used anywhere, anytime and from any device to provide technical insights on operations, maintenance and engineering systems.",
    button: "Besea Software",
  },
  {
    image: besea3,
    title: "Low Cost",
    description:
      "We are a team of professionals and software developers who deliver trusted asset management advice to ensure safe and reliable operations.",
    button: "Our Services",
  },
  {
    image: besea4,
    title: "Low Carbon",
    description:
      "We listen and innovate to deliver outstanding facility management recommendations to achieve net zero targets.",
    button: "Contact us",
  },
];

const FullscreenSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isSmall = windowWidth < 400;

  const settings = {
    dots: false,
    infinite: true,
    vertical: !isMobile,
    verticalSwiping: !isMobile,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "ease-in-out",
    arrows: false,
    afterChange: (current) => setActiveSlide(current),
  };

  const wrapTextByWords = (text, wordsPerLine = 9) => {
    const words = text.split(" ");
    const lines = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(" "));
    }
    return lines;
  };

  // Ustawienia wysokości slidera
 const getSliderHeight = () => {
  if (windowWidth < 768) return "h-[70vh]"; // mobile
  if (windowWidth > 1024 && windowWidth < 1280) return "h-[70vh]"; // zwykłe tablety/laptopy
  return "h-screen"; // duże ekrany
};

  // Ustawienia wielkości tekstu
  const getTitleSize = () => {
    if (isSmall) return "text-3xl";
    if (isMobile) return "text-5xl";
    if (isTablet) return "text-6xl";
    return "text-8xl";
  };

  const getDescSize = () => {
    if (isSmall) return "text-sm";
    if (isMobile) return "text-xl";
    if (isTablet) return "text-2xl";
    return "text-3xl";
  };

  const getButtonSize = () => {
    if (isSmall) return "text-sm px-4 py-2";
    if (isMobile) return "text-lg px-8 py-3";
    if (isTablet) return "text-xl px-10 py-4";
    return "text-2xl px-12 py-5";
  };

  return (
    <div className="fullscreen-slider relative w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative w-full flex flex-col ${getSliderHeight()} overflow-hidden`}
          >
            {/* Zdjęcie */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Linie wskaźników */}
            <div
              className={`absolute z-10 flex ${
                isMobile
                  ? "bottom-6 left-1/2 transform -translate-x-1/2 space-x-4 flex-row"
                  : "top-1/2 right-6 transform -translate-y-1/2 flex-col space-y-4"
              }`}
            >
              {slides.map((_, i) => (
                <div
                  key={i}
                  onClick={() => sliderRef.current.slickGoTo(i)}
                  className={`relative h-1 ${
                    isMobile ? "w-12" : "w-8"
                  } rounded-full cursor-pointer bg-white/50 overflow-hidden group`}
                >
                  <div
                    className={`absolute top-0 left-0 h-full rounded-full bg-[#00A84F] ${
                      i === activeSlide ? "animate-progress" : "w-0"
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Teksty i przycisk */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              {activeSlide === index && (
                <>
                  <h2
                    className={`font-bold mb-6 opacity-0 translate-y-6 animate-fadeInText drop-shadow-lg ${getTitleSize()}`}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className={`mb-8 text-white opacity-0 translate-y-6 animate-fadeInText delay-100 drop-shadow-md ${getDescSize()}`}
                  >
                    {wrapTextByWords(slide.description, 7).map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <button
                    className={`relative overflow-hidden bg-[#00A84F] text-white font-semibold opacity-0 translate-y-6 animate-fadeInText delay-200 group rounded-2xl shadow-lg ${getButtonSize()}`}
                  >
                    <span className="relative z-10">{slide.button}</span>
                    <span className="absolute inset-0 bg-gray-600 scale-0 origin-center transition-transform duration-300 ease-out group-hover:scale-100"></span>
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullscreenSlider;
