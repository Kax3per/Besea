import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

import { motion } from "framer-motion";
import logo from "../assets/images/besea3.png"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-8 mt-40 md:px-16 lg:px-28 py-20 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        {/* Logo i opis */}
        <div>
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img src={logo} alt="Besea Logo" className="w-56 h-auto " />
          </motion.div>

          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-sm">
            We provide consulting services in facility and asset management to
            ensure <span className="font-semibold text-green-600"> low-carbon</span>, 
            safe, and reliable operations.  
            Powered by <span className="font-semibold text-green-600"> cloud software </span> 
            and modern enterprise solutions.
          </p>

          <div className="flex gap-6 text-2xl text-gray-500">
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <FaLinkedin className="hover:text-green-600 cursor-pointer transition" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
              <FaFacebook className="hover:text-green-600 cursor-pointer transition" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <FaTwitter className="hover:text-green-600 cursor-pointer transition" />
            </motion.div>
          </div>
        </div>

        {/* Linki */}
        <div>
          <h3 className="text-2xl font-bold text-gray-600 mb-6">Quick Links</h3>
          <ul className="space-y-4 text-lg font-medium">
            {["Home", "About Us", "Services", "News", "Contact"].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="cursor-pointer text-gray-700 hover:text-green-600"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-2xl font-bold text-gray-600 mb-6">Contact</h3>
          <ul className="space-y-5 text-lg">
            <motion.li
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <FaMapMarkerAlt className="text-green-600 text-xl" />
              Brisbane, Australia
            </motion.li>
            <motion.li
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <FaPhone className="text-green-600 text-xl" />
              Contact Agent
            </motion.li>
            <motion.li
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <FaEnvelope className="text-green-600 text-xl" />
              <a
                href="mailto:contact@besea.com.au"
                className="hover:underline"
              >
                contact@besea.com.au
              </a>
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Dolna belka */}
      <div className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-500 text-base">
        © {new Date().getFullYear()} Besea Pty Ltd. All rights reserved.
      </div>
    </footer>
  );
}
