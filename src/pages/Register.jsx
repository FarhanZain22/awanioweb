import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight, Inbox, User } from "lucide-react";
import images from "../assets";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="min-h-screen w-full bg-[#050A18] flex items-center justify-center relative overflow-hidden font-sans">
        {/* --- Background Effects & Image --- */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img src={images.loginhero} alt="Tech Background" className="w-full h-full object-cover opacity-30" />
        </div>

        {/* --- Main Content Container --- */}
        <div className="container mx-auto px-6 z-10 relative flex h-full items-center justify-center md:justify-start">
          <div className="w-full max-w-md md:ml-10 mx-4 sm:mx-0">
            {/* Header */}
            <div className="mb-10 ">
              {/* --- Teks Header Diubah --- */}
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Create new account<span className="text-[#00B4D8]">.</span>
              </h1>
              <p className="text-gray-400 text-sm">
                Already have an account?
                <a href="/login" className="text-[#00B4D8] hover:underline font-medium">
                  Sign in
                </a>
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0">
                {/* First Name Input */}
                <div className="group bg-[#2b3045] bg-opacity-90 rounded-2xl px-5 py-3 border border-transparent focus-within:border-blue-500/30 transition-all duration-300 relative sm:w-1/2">
                  <label className="block text-gray-400 text-xs mb-1" htmlFor="first-name">
                    First Name
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="first-name"
                      className="w-full bg-transparent text-white outline-none border-b border-gray-500/50 focus:border-[#00B4D8] pb-1 transition-colors"
                      placeholder=""
                    />
                    <User className="text-white ml-3 w-5 h-5" />
                  </div>
                </div>

                {/* Last Name Input */}
                <div className="group bg-[#2b3045] bg-opacity-90 rounded-2xl px-5 py-3 border border-transparent focus-within:border-blue-500/30 transition-all duration-300 relative sm:w-1/2">
                  <label className="block text-gray-400 text-xs mb-1" htmlFor="last-name">
                    Last Name
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="last-name"
                      className="w-full bg-transparent text-white outline-none border-b border-gray-500/50 focus:border-[#00B4D8] pb-1 transition-colors"
                      placeholder=""
                    />
                    <User className="text-white ml-3 w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div className="group bg-[#2b3045] bg-opacity-90 rounded-2xl px-5 py-3 border border-transparent focus-within:border-blue-500/30 transition-all duration-300 relative">
                <label className="block text-gray-400 text-xs mb-1" htmlFor="email">
                  Email
                </label>
                <div className="flex items-center">
                  <input type="email" id="email" className="w-full bg-transparent text-white outline-none border-b border-gray-500/50 focus:border-[#00B4D8] pb-1 transition-colors" placeholder="" />
                  <Inbox className="text-white ml-3 w-5 h-5" />
                </div>
              </div>

              {/* Password Input */}
              <div className="group bg-[#2b3045] bg-opacity-90 rounded-2xl px-5 py-3 border border-transparent focus-within:border-blue-500/30 transition-all duration-300 relative">
                <label className="block text-gray-400 text-xs mb-1" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full bg-transparent text-white outline-none border-b border-gray-500/50 focus:border-[#00B4D8] pb-1 transition-colors"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-3 text-white focus:outline-none">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center pt-4">
                <button
                  type="submit"
                  className="bg-[#00B4D8] hover:bg-[#009ec0] text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(0,180,216,0.3)] hover:shadow-[0_0_25px_rgba(0,180,216,0.5)] w-full"
                >
                  Sign Up
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register; // <-- Ekspor Register
