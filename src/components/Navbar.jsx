import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronDown } from "lucide-react";

import logo from "../assets/images/besea1.png";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [pagesMobileOpen, setPagesMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "About Us", "Besea", "News", "Pages"];
  const leftLinks = ["Services", "Privacy", "About", "FAQ", "News", "Contact Us"];
  const rightLinks = ["Features", "Besea", "Development", "Prices"];

  useEffect(() => {
    setActive("Home");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setHamburgerOpen(false); // zmienione na 1024px
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (hamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hamburgerOpen]);

  useEffect(() => {
    if (!hamburgerOpen) {
      setPagesMobileOpen(false);
    }
  }, [hamburgerOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${
        scrolled ? "h-20" : "h-28"
      }`}
    >
      {/* Logo i hamburger */}
      <div className="flex items-center gap-4">
        <div className="lg:hidden"> {/* wcześniej md:hidden */}
          <motion.button
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
            className="relative w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              {!hamburgerOpen ? (
                <motion.div
                  key="hamburger"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-between w-5 h-4"
                >
                  <span className="h-0.5 w-full bg-black " />
                  <span className="h-0.5 w-full bg-black " />
                  <span className="h-0.5 w-full bg-black " />
                </motion.div>
              ) : (
                <motion.div
                  key="arrow"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronLeft size={24} className="text-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <img src={logo} alt="logo" className="h-8 lg:h-16" />
      </div>

      {/* Nawigacja desktop */}
      <nav className="hidden lg:flex ml-24"> {/* wcześniej md:flex */}
        <ul className="flex space-x-12 text-lg font-medium text-gray-600 mr-20">
          {links.map((link) => (
            <li
              key={link}
              onMouseEnter={() => link === "Pages" && setPagesOpen(true)}
              onMouseLeave={() => link === "Pages" && setPagesOpen(false)}
              onClick={() => setActive(link)}
              className={`relative cursor-pointer border-b-3 transition-colors ${
                active === link
                  ? "border-[#00A84F]"
                  : "border-transparent hover:border-[#00A84F]"
              }`}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mega Menu desktop */}
      <AnimatePresence>
        {pagesOpen && (
          <motion.div
            key="megaMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-screen bg-white shadow-lg z-50 py-12"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 px-12 relative">
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300"></div>
              <div className="pr-12">
                <h4 className="text-2xl mb-6 text-gray-600">Facility Management</h4>
                <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                  {leftLinks.map((item, i) => (
                    <span key={i} className="relative cursor-pointer px-4 py-2 text-gray-600 transition-all duration-300 hover:translate-x-2 group">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-1 bg-[#00A84F] 
                        scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pl-12">
                <h4 className="text-2xl mb-6 text-gray-600">Enterprise Software</h4>
                <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                  {rightLinks.map((item, i) => (
                    <span key={i} className="relative cursor-pointer px-4 py-2 text-gray-600 transition-all duration-300 hover:translate-x-2 group">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-1 bg-[#00A84F] 
                        scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hamburger menu mobile */}
      <AnimatePresence>
        {hamburgerOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-20 left-0 w-3/4 h-[calc(100vh-5rem)] bg-white shadow-lg z-50 p-4 md:p-6 overflow-y-scroll custom-scroll scrollbar-always"
          >
            <ul className="flex flex-col space-y-4 md:space-y-6 text-gray-600 mt-12">
              {links.map((link) => (
                <li key={link}>
                  {link === "Pages" ? (
                    <>
                      <div
                        className={`flex items-center justify-between cursor-pointer px-3 py-3 md:px-4 md:py-4 text-base md:text-lg transition-colors
                          ${active === link ? "bg-[#00A84F] text-white" : "text-gray-600"}
                          hover:bg-[#00A84F] hover:text-white`}
                        onClick={() => {
                          setActive("Pages");
                          setPagesMobileOpen(!pagesMobileOpen);
                        }}
                      >
                        <span>{link}</span>
                        <ChevronDown
                          className={`w-4 h-4 md:w-5 md:h-5 transform transition-transform ${
                            pagesMobileOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {pagesMobileOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 md:mt-8 ml-2"
                          >
                            <h4 className="text-[#00A84F] mt-6 md:mt-8 text-base md:text-xl mb-3 md:mb-4 border-b border-gray-300 pb-1">
                              Facility Management
                            </h4>
                            <div className="flex flex-col space-y-4 md:space-y-5 mb-6 md:mb-8">
                              {leftLinks.map((item, i) => (
                                <span
                                  key={i}
                                  onClick={() => {
                                    setActive(item);
                                    setHamburgerOpen(false);
                                  }}
                                  className="cursor-pointer px-3 py-2 md:px-4 md:py-2 transition-colors text-gray-600 hover:bg-[#00A84F] hover:text-white break-words"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>

                            <h4 className="text-[#00A84F] mt-6 md:mt-8 text-base md:text-xl mb-3 md:mb-4 border-b border-gray-300 pb-1">
                              Enterprise Software
                            </h4>
                            <div className="flex flex-col space-y-4 md:space-y-5">
                              {rightLinks.map((item, i) => (
                                <span
                                  key={i}
                                  onClick={() => {
                                    setActive(item);
                                    setHamburgerOpen(false);
                                  }}
                                  className="cursor-pointer px-3 py-2 md:px-4 md:py-2 transition-colors text-gray-600 hover:bg-[#00A84F] hover:text-white break-words"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <span
                      onClick={() => {
                        setActive(link);
                        setHamburgerOpen(false);
                      }}
                      className={`block cursor-pointer px-3 py-3 md:px-4 md:py-4 text-base md:text-lg transition-colors
                        ${active === link ? "bg-[#00A84F] text-white" : "text-gray-600"}
                        hover:bg-[#00A84F] hover:text-white`}
                    >
                      {link}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
