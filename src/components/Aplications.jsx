import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Applications() {
  const [init, setInit] = useState(false);

  // Initialize particles engine only once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      number: { value: 150, density: { enable: true, area: 800 } },
      color: { value: "#000" },
      shape: { type: "circle" },
      opacity: { value: 0.6, random: true },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 1.5,
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
      links: { enable: false },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 1 },
      },
    },
    detectRetina: true,
  }), []);

  const stats = [
    { number: 3, label: "Operations" },
    { number: 6, label: "Maintenance" },
    { number: 6, label: "Engineering" },
    { number: 6, label: "Business" },
  ];

  return (
    <div className="w-full flex justify-center mt-12 items-center py-20 bg-white">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

        {/* Left big number with particles */}
        <div className="relative w-[250px] md:w-[320px] h-[250px] md:h-[350px] flex justify-center items-center">
          {init && (
            <Particles
              id="tsparticles"
              init={particlesLoaded}
              options={options}
              className="absolute inset-0"
            />
          )}
          <h1 className="absolute text-[120px] md:text-[350px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700 select-none">
            21
          </h1>
        </div>

        {/* Middle text with button */}
        <div className="flex-1 max-w-md flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <span className="w-1 h-6 bg-gray-400 inline-block"></span>
            Applications
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Besea is complete Enterprise Asset Management software which
            provides operational, maintenance and engineering facility
            requirements. Outstanding test and inspection results and carbon
            load management offer total asset lifecycle tool to ensure safe and
            reliable system operations which is low cost and low carbon.
          </p>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded font-semibold">
            BESEA
          </button>
        </div>

        {/* Right numbers grid */}
        <div className="w-full max-w-md grid md:grid-cols-2 grid-cols-1 text-center">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`
                p-6 md:p-10
                md:first:border-t-0 md:border-gray-300
                ${idx === 0 || idx === 1 ? "md:border-b border-gray-300" : ""}
                ${idx === 0 || idx === 2 ? "md:border-r border-gray-300" : ""}
                flex flex-col items-center
              `}
            >
              <p className="text-4xl md:text-6xl font-semibold">{item.number}</p>
              <p className="text-gray-500 uppercase tracking-wide mt-2">{item.label}</p>
              {/* Kreska pod każdą liczbą tylko na telefonach */}
              <div className="block md:hidden w-12 h-[2px] bg-gray-300 mt-4"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
