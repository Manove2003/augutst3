import React from "react";
import { FaMapMarkerAlt, FaLinkedinIn, FaSearch, FaEnvelope } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md"; // New phone icon
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#141526] text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Info */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="logo" className="w-40 -ml-6 h-12" />
          <p className="mt-4 text-gray-400 text-sm">
            We elevate your success with guidance you can trust. Building partnerships that inspire lasting growth.
          </p>

          {/* Contact */}
          <div className="mt-5 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-[#2a2b3d] p-2 rounded">
                <MdPhoneAndroid /> {/* Changed phone icon */}
              </div>
              <span className="text-sm">111-111-111-111</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-[#2a2b3d] p-2 rounded">
                <FaMapMarkerAlt />
              </div>
              <span className="text-sm">Lorem Colony Dubai</span>
            </div>
          </div>

          {/* Social */}
          <p className="py-4">Follow Us</p>
          <div className="flex space-x-3">
            <div className="bg-[#2a2b3d] p-2 rounded cursor-pointer">
              <FaSearch />
            </div>
            <div className="bg-[#2a2b3d] p-2 rounded cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg border-b-2 border-white inline-block pb-1">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>Home</li>
            <li>Who we are</li>
            <li>Our Services</li>
            <li>Work with us</li>
            <li>Get in touch</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="font-semibold text-lg border-b-2 border-white inline-block pb-1">
            Help & Support
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQS</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="bg-[#1a1b2e] p-6 rounded-xl">
          <h3 className="font-semibold">Stay Connected</h3>
          <p className="text-gray-400 text-sm mt-2">
            Stay connected with exclusive, confidential insights from our team.
          </p>

          <div className="relative mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#2a2b3d] p-3 rounded-lg pr-10 text-sm outline-none"
            />
            <FaEnvelope className="absolute top-3.5 right-3 text-gray-400" />
          </div>

          <div className="flex items-start mt-3 space-x-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-xs text-gray-400">
              I agree to receive communications and confirm my data will remain confidential, in accordance with the Privacy Policy.
            </p>
          </div>

          <button className="mt-4 w-full bg-[#7e7f9a] py-2 rounded-lg text-sm font-semibold hover:bg-[#6d6e88] transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms of Service</span>
          <span>|</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
