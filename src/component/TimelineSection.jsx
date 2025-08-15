"use client";
import React from "react";
import { TracingBeam } from "./tracing-beam"; // import your animation
import { FaPlay } from "react-icons/fa";

const TimelineSection = () => {
  return (
    <>
    <div className="bg-[#0f1a2c] text-white py-16 px-4">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          The Lev Difference
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          We turn <span className="text-purple-400">ideas into action</span>,<br />
          actions into <span className="text-purple-400">results</span>
        </h2>
      </div>

      {/* Timeline with Animated Line */}
      <TracingBeam className="max-w-6xl mx-auto">
        {/* Item 1 */}
        <div className="relative md:grid md:grid-cols-2 md:gap-14">
          {/* Dot */}
          {/* <span className="hidden md:block absolute left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full 
            bg-white z-10 border-4 border-[#0f1a2c] shadow" /> */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://picsum.photos/id/1015/800/600"
              alt="Leadership"
              className="rounded-lg shadow-lg h-60 w-full max-w-md"
            />
          </div>
          <div className="mt-6 md:mt-0 flex items-center">
            <div className="text-center md:text-left max-w-md">
              <h3 className="font-semibold">01. Hands On Leadership</h3>
              <p className="text-gray-300 text-sm mt-2">
                We’re involved at every step, providing insight and guidance
                grounded in real-world experience.
              </p>
              <button className="mt-4 px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative md:grid md:grid-cols-2 md:gap-14">
          {/* <span className="hidden md:block absolute left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full 
            bg-white z-10 border-4 border-[#0f1a2c] shadow" /> */}
          <div className="md:order-2 flex justify-center md:justify-start">
            <img
              src="https://picsum.photos/id/1018/800/600"
              alt="Precision"
              className="rounded-lg h-60 shadow-lg w-full max-w-md"
            />
          </div>
          <div className="md:order-1 mt-6 md:mt-0 pl-0 md:pl-32 flex items-center">
            <div className="text-center md:text-left max-w-md">
              <h3 className="font-semibold">
                02. Strategic Insight, Operational Precision
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                We translate complex challenges into actionable strategies with
                measurable outcomes.
              </p>
              <button className="mt-4 px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative md:grid md:grid-cols-2 md:gap-14 ">
          {/* <span className="hidden md:block absolute left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full 
            bg-white z-10 border-4 border-[#0f1a2c] shadow" /> */}
          <div className="flex justify-center md:justify-end pt-4">
            <img
              src="https://picsum.photos/id/1025/800/600"
              alt="Solutions"
              className="rounded-lg shadow-lg w-full max-w-md h-60"
            />
          </div>
          <div className="mt-6 md:mt-0 flex items-center">
            <div className="text-center md:text-left max-w-md">
              <h3 className="font-semibold">03. Purpose-Built Solutions</h3>
              <p className="text-gray-300 text-sm mt-2">
                No templates. Every recommendation is shaped by your unique
                context, ambition, and risk profile.
              </p>
              <button className="mt-4 px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
    <div className="min-h-screen flex items-center justify-center bg-[#D9D9D9]">
      <div className="w-12 h-12 flex items-center justify-center bg-[D9D9D9] rounded-full border-2 shadow-lg cursor-pointer hover:scale-105 transition">
        <FaPlay className="text-black text-xl ml-1" />
      </div>
    </div>  


     <div className=" flex flex-col  items-center justify-center bg-[#3D3E56] py-12">
         <h1 className="text-3xl md:text-5xl text-[FFFFFF] py-4 font-bold"> 
            Connect With <span className="text-[#7B7D97]">Our Experts</span>         </h1>
            <p className="text-[#F5F5F5] text-xl py-6">Discover tailored insights to elevate your business.</p>
            <button className="bg-[#191A2F] py-2 mt-4 px-6  text-[#FFFFFF]">
                Get in touch
            </button>
    </div>  
</>
);
};

export default TimelineSection;
