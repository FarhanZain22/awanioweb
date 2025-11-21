import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight, Inbox } from "lucide-react";
import images from "../assets";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login berhasil!");
      // bisa diarahkan ke halaman lain
      // navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[#050A18] flex items-center justify-center relative overflow-hidden font-sans">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src={images.loginhero}
            alt="Tech Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Main Container */}
        <div className="container mx-auto px-6 z-10 relative flex h-full items-center justify-center md:justify-start">
          <div className="w-full max-w-md md:ml-10 mx-4 sm:mx-0">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Sign in<span className="text-[#00B4D8]">.</span>
              </h1>
              <p className="text-gray-400 text-sm">
                Don't have an account yet?{" "}
                <a
                  href="/register"
                  className="text-[#00B4D8] hover:underline font-medium"
                >
                  Sign up
                </a>
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="group bg-[#2b3045] bg-opacity-90 rounded-2xl px-5 py-3 border border-transparent focus-within:border-blue-500/30 transition-all duration-300 relative">
                <label
                  className="block text-gray-400 text-xs mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex items-center">
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent text-white outline-none border-b border-gray-500/50 focus:border-[#00B4D8] pb-1 transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="group bg-[#2b3045] bg-opacity-90 rounded-2xl px-5 py-3 border border-transparent focus-within:border-blue-500/30 transition-all duration-300 relative">
                <label
                  className="block text-gray-400 text-xs mb-1"
                  htmlFor="password"
                >
                  Password
                </label>

                <div className="flex items-center relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full bg-transparent text-white outline-none border-b border-gray-500/50 focus:border-[#00B4D8] pb-1 transition-colors"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  {/* ICON MATA MUNCUL HANYA JIKA PASSWORD ADA ISINYA */}
                  {password.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="ml-3 text-white focus:outline-none absolute right-0 pr-1"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 opacity-80 hover:opacity-100" />
                      ) : (
                        <Eye className="w-5 h-5 opacity-80 hover:opacity-100" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col sm:flex-row items-center sm:justify-between pt-4">
                {/* Checkbox */}
                <label className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={keepSignedIn}
                      onChange={() => setKeepSignedIn(!keepSignedIn)}
                    />
                    <div
                      className={`w-5 h-5 border-2 border-gray-400 rounded transition-all ${
                        keepSignedIn ? "bg-transparent border-white" : ""
                      }`}
                    >
                      {keepSignedIn && (
                        <svg
                          className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="ml-3 text-gray-300 text-sm group-hover:text-white transition-colors">
                    Keep me signed in
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#00B4D8] hover:bg-[#009ec0] text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(0,180,216,0.3)] hover:shadow-[0_0_25px_rgba(0,180,216,0.5)] w-full sm:w-auto mt-4 sm:mt-0"
                >
                  {loading ? "Loading..." : "Sign in"}
                  {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
