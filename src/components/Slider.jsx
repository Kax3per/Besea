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
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <div className="fullscreen-slider relative w-full">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative w-full flex flex-col ${
              isMobile ? "h-[70vh]" : "h-screen"
            }`}
          >
            {/* Zdjęcie */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full object-cover ${
                isMobile ? "h-[70vh]" : "h-screen"
              }`}
            />

            {/* Linie wskaźników */}
            <div
              className={`absolute z-10 flex ${
                isMobile
                  ? "bottom-6 left-1/2 transform -translate-x-1/2 space-x-4 flex-row"
                  : "top-2/3 right-6 transform -translate-y-1/2 flex-col space-y-4"
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
            <div
              className={`absolute inset-0 flex flex-col items-center text-center text-white px-6 ${
                isMobile ? "justify-center pb-0" : "justify-end pb-32"
              }`}
            >
              {activeSlide === index && (
                <>
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 opacity-0 translate-y-6 animate-fadeInText">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl mb-6 text-white opacity-0 translate-y-6 animate-fadeInText delay-100">
                    {wrapTextByWords(slide.description, 7).map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <button className="relative overflow-hidden bg-[#00A84F] px-9 py-4 text-white text-lg font-semibold opacity-0 translate-y-6 animate-fadeInText delay-200 group">
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
