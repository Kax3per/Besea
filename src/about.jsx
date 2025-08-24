import { motion } from "framer-motion";
import image1 from "./assets/images/images.01.jpg";

export default function About() {
  return (
    <section className="bg-white text-gray-900 overflow-hidden">
      {/* Hero image z efektem parallax i overlay gradient */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <motion.img
          src={image1}
          alt="Besea Story"
          className="absolute w-full h-full object-cover scale-110"
          initial={{ scale: 1.2, y: 0 }}
          animate={{ scale: 1.1, y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-9xl font-extrabold tracking-tight drop-shadow-xl text-white"
          >
            Besea Story
          </motion.h1>
        </div>
      </div>

      {/* Treść sekcji */}
      <div className="max-w-4xl mx-auto px-8 py-28 space-y-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          Besea Operations
        </motion.h2>

        <div className="flex flex-col gap-16">
          {[{
            title: "Asset Transformation",
            text: "We help businesses to transform to lower cost and lower carbon operations here in Australia."
          }, {
            title: "Carbon Management",
            text: "We support asset managers and business leaders who are responsible for facility operations, maintenance and engineering to transform business operations to a more sustainable future using real time asset data available anywhere and anytime."
          }, {
            title: "Technology Innovation",
            text: "Integrity and innovation are at the core of our business. We listen to our customers, and we can adopt new technologies and features into our versatile Enterprise Platform and swiftly distribute new updates for all users to benefit. We provide state of the art cloud technology interface to help businesses access asset operational and maintenance data at the right time."
          }].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative bg-gray-50 p-12 w-full rounded-3xl shadow-2xl border border-gray-200 overflow-hidden group space-y-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 via-white to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-bold text-emerald-600">{item.title}</h3>
                <p className="text-xl text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-10 text-gray-700"
        >
          <p className="text-emerald-600 font-extrabold uppercase tracking-wide text-5xl">
            Our Values
          </p>
          <p className="text-2xl leading-relaxed">
            Our Values guide how we work together and create value through innovation.
          </p>

          <p className="text-2xl leading-relaxed">
            Book <span className="text-emerald-600 font-bold">Besea Demo</span> with Senior Asset Consultant.
          </p>

          <p className="text-emerald-600 font-medium text-2xl">contact@besea.com.au</p>

          <div className="flex flex-wrap gap-10 mt-12 text-gray-600 font-medium text-2xl">
            {["Home", "Operations", "Maintenance", "Engineering", "Business"].map((link, i) => (
              <span
                key={i}
                className="relative cursor-pointer px-2 overflow-hidden group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">{link}</span>
                <span className="absolute left-0 bottom-0 w-0 h-full bg-emerald-500 transition-all duration-500 group-hover:w-full"></span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
