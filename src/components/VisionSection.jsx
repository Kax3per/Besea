export default function VisionSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 mt-40"> 
      <div className="text-left">
        <h2 className="font-poppins font-semibold text-4xl md:text-5xl mb-2 text-[#00A84F]">
          Our Vision
        </h2>
        <p className="font-poppins font-medium text-sm md:text-base text-gray-500 mb-6">
          Operations | Maintenance | Engineering
        </p>

        {/* zdanie na telefonach w 3 liniach, na większych w jednej */}
        <p className="font-poppins font-medium text-lg md:text-xl leading-relaxed max-w-4xl text-blue-900">
          <span className="block md:inline">
            Deliver sustainable facility management solutions
          </span>{" "}
          <span className="block md:inline">
            that enhance efficiency, safety,
          </span>{" "}
          <span className="block md:inline">
            and comfort for businesses and communities worldwide.
          </span>
        </p>
      </div>
    </section>
  );
}
