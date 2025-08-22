import React, { useState } from "react";
import bigImage from "../assets/images/process map main.png";

export default function SingleImageSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-6 md:px-12 mr-20 lg:px-20 py-20 bg-white flex justify-center">
      {/* Obrazek */}
      <img
        src={bigImage}
        alt="Single Big"
        className="w-full max-w-full h-auto object-cover rounded-xl shadow-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4"
          onClick={() => setIsOpen(false)} // Kliknięcie w tło zamyka
        >
          {/* Przycisk zamknięcia - FIXED w rogu ekranu */}
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-4 left-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition"
          >
            ×
          </button>

          {/* Obrazek w centrum */}
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()} // Zapobiega zamknięciu przy kliknięciu na obrazek
          >
            <img
              src={bigImage}
              alt="Preview"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
