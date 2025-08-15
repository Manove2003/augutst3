import React from "react";
import umbrellaImg from "../assets/umberalla.png"; // replace with your actual image path

const PrivateAdvisorySection = () => {
  return (
    <section className="bg-[#7B7D97] py-16 px-6 md:px-18">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left text content - 60% width on md+ */}
        <div className="w-full md:w-3/5 text-center md:text-start">
          <p className="text-md uppercase tracking-widest font-bold text-[#3A3A52] mb-2">
            About us
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-snug">
            Private advisory for 
            <span className="text-[#191A2F] font-semibold"> global decision </span>
            makers
          </h2>
          <p className="text-[#FFFFFFA1] mt-4 text-xl leading-relaxed ">
            Lev operates quietly behind the scenes, resolving critical challenges,
            enabling transformative outcomes, and safeguarding reputations. Our advisory
            network delivers seamless expertise across jurisdictions and sectors.
          </p>
          <button className="mt-6 bg-[#3D3D55] hover:bg-gray-700 text-white text-sm px-5 py-2 rounded">
            Learn more
          </button>
        </div>

        {/* Right image - 40% width on md+ */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src={umbrellaImg}
            alt="Umbrella in rain"
            className="w-full h-auto max-w-sm rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default PrivateAdvisorySection;
