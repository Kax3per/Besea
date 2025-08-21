import React, { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Applications() {
  const [init, setInit] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => await loadSlim(engine)).then(() =>
      setInit(true)
    );
  }, []);

  const particlesLoaded = (container) => console.log(container);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      number: { value: 800, density: { enable: true, area: 1200 } },
      color: { value: ["#00A84F", "#00753A"] },
      shape: { type: ["circle", "edge"] },
      opacity: { value: 0.8, random: true },
      size: [{ min: 1, max: 3 }, { min: 2, max: 6 }],
      move: { enable: true, speed: 1.5, random: true, straight: false, outModes: { default: "bounce" } },
      links: { enable: false },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "attract" }, onClick: { enable: true, mode: "push" } },
      modes: { attract: { distance: 150, duration: 0.4, factor: 5 }, push: { quantity: 2 } },
    },
    detectRetina: true,
  }), []);

  const stats = [
    { number: 3, label: "Operations" },
    { number: 6, label: "Maintenance" },
    { number: 6, label: "Engineering" },
    { number: 6, label: "Business" },
  ];

  useEffect(() => {
    const startCounters = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      stats.forEach((stat, idx) => {
        let start = 0;
        const end = stat.number;
        const stepTime = Math.max(Math.floor(1000 / end), 50);
        const timer = setInterval(() => {
          start += 1;
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[idx] = start;
            return newCounters;
          });
          if (start >= end) clearInterval(timer);
        }, stepTime);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) startCounters(); },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-20 bg-white" ref={sectionRef}>
      
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start gap-12 px-6 md:px-0">

        {/* Liczba 21 */}
        <div className="relative w-full lg:w-[200px] h-[300px] lg:h-[380px] flex justify-center lg:justify-start items-center">
          {init && <Particles id="tsparticles" init={particlesLoaded} options={options} className="absolute inset-0" />}
          <h1 className="absolute text-[180px] sm:text-[200px] lg:text-[220px] lg:leading-[220px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00A84F] to-[#00753A] select-none">
            21
          </h1>
        </div>

        {/* Tekst + grid */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">

          {/* Tekst */}
          <div className="flex-1 max-w-full lg:max-w-[400px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-gray-400 inline-block"></span>
              Applications
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Besea is complete Enterprise Asset Management software which
              provides operational, maintenance and engineering facility
              requirements. Outstanding test and inspection results and carbon
              load management offer total asset lifecycle tool to ensure safe and
              reliable system operations which is low cost and low carbon.
            </p>
            <button className="relative px-16 py-5 font-semibold rounded overflow-hidden bg-green-600 text-white group mb-6">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-green-600">BESEA</span>
              <span className="absolute inset-0 bg-white rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0"></span>
              <span className="absolute inset-0 border border-green-600 rounded scale-x-0 scale-y-0 origin-bottom-left transition-transform duration-1000 group-hover:scale-x-100 group-hover:scale-y-100 z-20 pointer-events-none"></span>
            </button>
          </div>

          {/* Grid liczników */}
          <div className="w-full lg:w-3/5 grid lg:grid-cols-2 grid-cols-1 text-center gap-3">
            {stats.map((item, idx) => (
              <div key={idx} className={`group p-3 lg:p-5 lg:first:border-t-0 lg:border-gray-300 ${idx === 0 || idx === 1 ? "lg:border-b border-gray-300" : ""} ${idx === 0 || idx === 2 ? "lg:border-r border-gray-300" : ""} flex flex-col items-center justify-center cursor-pointer`}>
                <p className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-400 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00A84F] group-hover:to-[#00753A]">
                  {counters[idx]}
                </p>
                <p className="text-lg sm:text-xl lg:text-xl text-gray-500 uppercase tracking-wide mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
