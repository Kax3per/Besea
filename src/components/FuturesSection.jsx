export default function FeaturesSection() {
  const features = [
    {
      icon: "🌳",
      title: "Low Carbon",
      description:
        "Develop facility and project budget which includes resource allocation, financial cost and carbon management. Assign carbon loading to any operational, maintenance or logistics activity to measure and optimise Scope 1 Greenhouse Gas emissions.",
    },
    {
      icon: "🏠",
      title: "Integrated System",
      description:
        "Common enterprise platform for facility staff, consultants and contractors to ensure that safety, operational and maintenance data is available in the right format and at the right time to enable quick evidence based operational decisions.",
    },
    {
      icon: "💰",
      title: "Low Cost",
      description:
        "Operational excellence to ensure safe and reliable production or operation through transparent inspection and test records maintenance data. Review maintenance plan business drivers and failure modes against real time maintenance execution data and challenge appropriate resource allocation.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-white shadow-md rounded-lg p-10 text-center transition-all duration-300 hover:shadow-xl"
          >
            {/* Ikona z trójkątem w tle */}
            <div className="relative flex justify-center mb-6 text-5xl">
              <div
                className="absolute transition-transform duration-500 group-hover:-rotate-30"
                style={{
                  zIndex: 0,
                  width: 0,
                  height: 0,
                  borderLeft: "40px solid transparent",
                  borderRight: "40px solid transparent",
                  borderBottom: "70px solid #e5e7eb", // gray-200
                  transform: "rotate(30deg)",
                  top: "20%",
                  left: "50%",
                  transformOrigin: "center",
                  translate: "-50% -50%",
                }}
              ></div>

              <span className="relative z-10">{feature.icon}</span>
            </div>

            <h3 className="font-poppins font-semibold text-xl text-gray-500 mb-3 transition-colors duration-500 group-hover:text-[#00A84F]">
              {feature.title}
            </h3>

            <div className="mx-auto mb-6 h-0.5 w-12 bg-gray-200 transition-all duration-500 group-hover:w-24 group-hover:bg-[#00A84F]"></div>

            <p className="text-gray-600 text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
