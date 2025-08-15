import React, { useState } from "react";
import { TextGenerateEffect } from "./text-generate-effect";
import { motion } from "motion/react";
import logo from "../assets/logo.png";
import enable from "../assets/enable.png";
import bgRight from "../assets/Group.png";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const servicesList = [
    "Web Development",
    "Mobile Apps",
    "Digital Marketing",
    "UI/UX Design",
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between sm:px-6 md:px-2 items-center py-4 relative">
        <div className="w-28 sm:w-32">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg items-center relative">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>

          {/* Clickable Services */}
          <li className="relative">
            <button
              onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
              className="hover:text-gray-300 cursor-pointer focus:outline-none"
            >
              Services {desktopServicesOpen ? "▲" : "▼"}
            </button>
            {desktopServicesOpen && (
              <ul className="absolute left-0 top-full bg-[#1e293b] text-sm rounded shadow-lg mt-2">
                {servicesList.map((service, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer whitespace-nowrap"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <button className="hidden md:block bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">
          Get in Touch
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Fixed Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#1e293b] z-50 flex flex-col p-6 text-lg">
          <button
            className="self-end text-3xl mb-6"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <a href="#" className="hover:text-gray-300 mb-4">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 mb-4">
            About
          </a>

          {/* Mobile Services Toggle */}
          <div className="mb-4">
            <button
              className="flex justify-between w-full hover:text-gray-300"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <span>{servicesOpen ? "▲" : "▼"}</span>
            </button>
            {servicesOpen && (
              <ul className="pl-4 mt-2 flex flex-col gap-2">
                {servicesList.map((service, index) => (
                  <li
                    key={index}
                    className="hover:text-gray-300 cursor-pointer text-sm"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">
            Get in Touch
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-2 sm:px-6 md:px-8 gap-10 py-16">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
            alt="Bridge"
            className="h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <div
          className="w-full md:w-1/2 text-center md:text-left bg-cover bg-center rounded-lg p-4"
          style={{ backgroundImage: `url(${bgRight})` }}
        >
          <div className="flex items-center justify-center md:justify-start">
            <h1 className="border-t-2 w-20 sm:w-32 -mt-2"></h1>
            <p className="pl-4 uppercase tracking-widest text-xs sm:text-sm mb-2">
              Elevating Success
            </p>
          </div>

          <TextGenerateEffect
            words="Elevating ambition into action in dynamic environments"
            className="text-2xl sm:text-3xl md:text-5xl leading-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-4 text-gray-300 text-sm sm:text-base"
          >
            We partner with businesses to navigate complex challenges and unlock
            new opportunities with precision and discretion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-6"
          >
            <button className="bg-[#8B8FA8] text-black px-4 sm:px-5 py-2 rounded hover:bg-gray-300 text-sm sm:text-base">
              Get in Touch
            </button>
            <button className="flex items-center gap-2 text-white px-4 sm:px-5 py-2 rounded hover:bg-gray-700 text-sm sm:text-base">
              <img src={enable} alt="enable" className="w-5 h-5" />
              <span>Who we are</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
