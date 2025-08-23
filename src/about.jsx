import React from "react";
import Navbar from "./components/Navbar";
export default function About() {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      {/* Navbar zawsze na górze */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Zdjęcie w tle z animacją */}
      <img
        src="/images/hero.jpg" // wrzuć zdjęcie do public/images
        alt="Hero"
        className="w-full h-full object-cover animate-pan"
      />

      {/* Overlay dla czytelności tekstu */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Tekst na środku */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg">
          Besea Story
        </h1>
      </div>
    </div>
  );
}
