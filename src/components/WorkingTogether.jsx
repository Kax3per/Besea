import React, { useState } from "react";
import img1 from "../assets/images/app03.png"
import img2 from "../assets/images/app04.png"



export default function WorkingTogether() {
  const [active, setActive] = useState(0);

  const steps = [
    { number: "01", title: "Professional", text: "We offer trusted engineering advice tailored for your facility management needs.", button: "SERVICES" },
    { number: "02", title: "Platform", text: "Besea platform is highly versatile Enterprise Resource Platform with focus on carbon and cost managemen.", button: "BESEA" },
    { number: "03", title: "People", text: "Our team is experienced in asset management and everything we do is guided by our Values.", button: "VALUES" },
    { number: "04", title: "Plan", text: "Professional advice together with EAM Software can optimise a strategic, business and execution plan.", button: "SIGN UP" },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between py-20 px-6 md:px-12 lg:px-20 bg-white">
      
      {/* Lewa sekcja */}
      <div className="w-full lg:w-1/2 flex flex-col items-start mb-10 lg:mb-0">
        <h2 className="text-4xl md:text-5xl text-blue-900 font-bold mb-6">Working Together</h2>

  {/* Pasek progresu lekko krótszy */}
<div className="relative w-[calc(100%-40px)] mb-6">
  <div className="absolute top-1/2 left-0 h-[2px] w-full bg-gray-200"></div>
  <div
    className="absolute top-1/2 h-[2px] bg-[#00A84F] transition-all duration-500"
    style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
  ></div>

  <div className="flex justify-between relative z-10">
    {steps.map((step, idx) => (
      <button
        key={idx}
        onClick={() => setActive(idx)}
        className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-all duration-300 ${
          active === idx
            ? "bg-[#00A84F] text-white"
            : "bg-gray-100 text-gray-400 hover:bg-green-100"
        }`}
      >
        {idx + 1}
      </button>
    ))}
  </div>
</div>

        {/* Tekst i przycisk */}
        <div className="mt-4">
          <h3 className="text-4xl mb-5 text-gray-500 font-semibold mb- hover:text-[#00A84F]">{steps[active].title}</h3>
          <p className="text-gray-500 mb-6">{steps[active].text}</p>
<button className="group relative h-[50px] w-40 overflow-hidden border border-[#00A84F] bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#00A84F] before:transition-all before:duration-500 hover:before:w-full">
  <span className="relative z-10 text-[#00A84F] group-hover:text-white font-medium">
 {steps[active].button}
   
  </span>
</button>


        </div>
      </div>
{/* Prawa sekcja - obrazy ułożone jak na Twoim zdjęciu */}
{/* Prawa sekcja - obrazy */}
{/* Prawa sekcja - obrazy */}
<div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-center items-center gap-6 mt-20 lg:mt-0">
  <img
    src={img1}
    alt="App 03"
    className="w-96 h-150 object-cover shadow-lg"
  />
  <img
    src={img2}
    alt="App 04"
    className="w-96 h-150 object-cover shadow-lg"
  />
</div>


    </div>
  );
}
