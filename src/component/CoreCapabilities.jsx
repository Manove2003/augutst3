import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import bgPattern from "../assets/down.png"; // your background pattern

const data = [
  {
    image: "https://picsum.photos/id/1015/800/600",
    title: "Our Core Capabilities",
    subtitle: "What We Do",
    text: "We work with organizations navigating pivotal decisions whether evolving their business, mitigating risk, or pursuing strategic transactions. Our work is anchored in clarity, discretion, and measurable outcomes."
  },
  {
    image: "https://picsum.photos/id/1018/800/600",
    title: "Driving Innovation",
    subtitle: "What We Do",
    text: "We help organizations foster innovation through advanced strategies, creative solutions, and cutting-edge technologies."
  },
  {
    image: "https://picsum.photos/id/1021/800/600",
    title: "Strategic Growth",
    subtitle: "What We Do",
    text: "We guide businesses in identifying growth opportunities, expanding into new markets, and achieving long-term success."
  }
];

const CoreCapabilities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { image, title, subtitle, text } = data[currentIndex];

  return (
    <div
      className="relative bg-gray-50 py-12"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundSize: "750px"
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl  px-6 md:px-16 py-6 md:py-16   relative">
        
        {/* Image */}
        <div className="w-full md:w-1/3">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-md object-cover shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0">
          <p className="text-md uppercase font-semibold tracking-widest text-[right-4] mb-2">
            {subtitle}
          </p>
        <h2 className="text-3xl font-bold mb-4">
  {title.split(" ").slice(0, 2).join(" ")}{" "}
  <span className="text-[#8B8FA8]">
    {title.split(" ").slice(2).join(" ")}
  </span>
</h2>

          <p className="text-gray-600 mb-6 max-w-[400px] leading-relaxed">{text}</p>
          <button className="bg-[#7B7D97]  text-white px-5 py-2 rounded-md transition">
            Learn more
          </button>
        </div>

        {/* Arrows */}
        <div className="absolute right-4  md:-right-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
          <button
            onClick={handlePrev}
            className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full shadow"
          >
            <FaChevronUp />
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full shadow"
          >
            <FaChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoreCapabilities;
