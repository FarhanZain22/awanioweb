import React from "react";
import Navbar from "../components/Navbar";
import bgDemo from "../assets/image-demo/bg-demo.png";
import Footer from "../components/Footer";

const Demo = () => {
  return (
    <>
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar active="demo" />

      {/* HERO + BACKGROUND */}
      <div
className="w-full min-h-[600px] flex flex-col items-center pt-28 pb-20 px-4relative">
        {/* Background Image */}
        <img
          src={bgDemo}
          alt="Background Demo"
          className="
            absolute top-0 left-0 w-full h-full object-cover 
            opacity-90
          "
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-[#002246]/80 via-[#003063]/70 to-[#061C36]"></div>

        {/* TEXT */}
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            Move your business forward
          </h1>

          <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed">
            Wondering on how we do our magic? <br />
            Do not hesitate to ask for demo.
          </p>
        </div>

        {/* FORM CARD */}
        <div
          className="
            relative z-10 mt-10 bg-white rounded-2xl 
            shadow-xl w-full max-w-xl px-8 py-10
          "
        >
          <h2 className="font-semibold text-xl mb-1">Request Demo</h2>
          <p className="text-sm text-gray-600 mb-6">
            Send us your contact and we’ll get back to you soon
          </p>

          {/* FORM INPUTS */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-lg px-4 py-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="Company"
              className="border border-gray-300 rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="Job Title"
              className="border border-gray-300 rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="Phone Number (ex: +62)"
              className="border border-gray-300 rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded-lg px-4 py-3"
            />

            {/* Checkbox */}
            <label className="flex items-start gap-2 text-sm text-gray-700 mt-2">
              <input type="checkbox" className="mt-1" />
              <span>
                I have read and agree to Awanio’s{" "}
                <span className="text-[#0066CC] underline cursor-pointer">
                  privacy policy
                </span>
              </span>
            </label>

            {/* BUTTON */}
            <button
              className="
                bg-[#00539B] text-white w-full py-3 rounded-lg mt-3 
                hover:bg-[#003F7A] transition text-sm font-medium
              "
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>

      
      
    </div>
    <Footer active="demo" />
    </>
  );
};

export default Demo;
