import React, { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Applications() {
  const [init, setInit] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

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
    number: { value: 800, density: { enable: true, area: 1200 } },
    color: { value: ["#00A84F", "#00753A"] },
    shape: { type: ["circle", "edge"] }, // kropki i paski
    opacity: { value: 0.8, random: true },
    size: {
      value: [
        { min: 1, max: 3 }, // kropki
        { min: 2, max: 6 }  // paski
      ],
      random: true,
    },
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
      onHover: { enable: true, mode: "attract" }, // <-- zmiana na "attract"
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      attract: { distance: 150, duration: 0.4, factor: 5 }, // przyciąganie do kursora
      push: { quantity: 2 },
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

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          stats.forEach((stat, idx) => {
            let start = 0;
            const end = stat.number;
            const duration = 1000; // 1 second
            const stepTime = Math.abs(Math.floor(duration / end));
            const timer = setInterval(() => {
              start += 1;
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[idx] = start;
                return newCounters;
              });
              if (start === end) clearInterval(timer);
            }, stepTime);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="w-full flex justify-center mt-12 items-center py-20 bg-white" ref={sectionRef}>
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
        <h1 className="absolute text-[280px] sm:text-[350px] md:text-[350px] ml-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00A84F] to-[#00753A] select-none">
          21
        </h1>
        </div>

        {/* Middle text with button */}
        <div className="flex-1 max-w-xs md:max-w-md flex flex-col items-center md:items-start ml-10 text-center md:text-left">
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
<button className="relative px-12 py-4 font-semibold rounded overflow-hidden bg-green-600 text-white group">
  {/* Tekst */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-green-600">
    BESEA
  </span>

  {/* Overlay tła */}
  <span className="absolute inset-0 bg-white rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0"></span>

  {/* Animowany border */}
  <span className="absolute inset-0 border border-green-600 rounded scale-x-0 scale-y-0 origin-bottom-left transition-transform duration-1000 group-hover:scale-x-100 group-hover:scale-y-100 z-20 pointer-events-none"></span>
</button>









        </div>

        {/* Right numbers grid */}
<div className="w-full max-w-md grid md:grid-cols-2 grid-cols-1 text-center">
  {stats.map((item, idx) => (
    <div
      key={idx}
      className={`
        group
        p-6 md:p-10
        md:first:border-t-0 md:border-gray-300
        ${idx === 0 || idx === 1 ? "md:border-b border-gray-300" : ""}
        ${idx === 0 || idx === 2 ? "md:border-r border-gray-300" : ""}
        flex flex-col items-center
        cursor-pointer
      `}
    >
      {/* Liczba: szara domyślnie, gradient na hover */}
      <p className="md:text-[80px] sm:text-8xl md:text-6xl font-semibold
                    text-gray-400
                    transition-all duration-300 ease-out
                    group-hover:-translate-y-4
                    group-hover:text-transparent
                    group-hover:bg-clip-text
                    group-hover:bg-gradient-to-r
                    group-hover:from-[#00A84F]
                    group-hover:to-[#00753A]">
        {counters[idx]}
      </p>
      
      {/* Tekst pod liczbą */}
      <p className="text-gray-500 uppercase tracking-wide mt-2
                    transition-colors duration-300
                   ">
        {item.label}
      </p>

      <div className="block md:hidden w-12 h-[2px] bg-gray-300 mt-4"></div>
    </div>
  ))}
</div>



  

      </div>
    </div>
  );
}
