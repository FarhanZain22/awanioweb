import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight, User } from "lucide-react";
import images from "../assets";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../components/firebase";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Register user Firebase Auth
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Save user to Firestore
      await setDoc(doc(db, "users", res.user.uid), {
        firstName,
        lastName,
        email: res.user.email,
        role: "user",
        createdAt: new Date(),
      });

      toast.success("User Registered Successfully!", {
        position: "top-center",
        duration: 1000,
      });

      console.log("User Registered Successfully!!");

      // Redirect setelah toast tampil
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);

    } catch (error) {
      console.log("Register Error:", error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#050A18] flex items-center justify-center relative overflow-hidden font-sans">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src={images.loginhero}
          alt="Tech Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative flex h-full items-center justify-center md:justify-start">
        <div className="w-full max-w-md md:ml-10 mx-4 sm:mx-0">

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
              Create new account<span className="text-[#00B4D8]">.</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-[#00B4D8] hover:underline font-medium"
              >
                Sign in
              </a>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-6">

            {/* First & Last Name */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0">
              <div className="group bg-[#2b3045] bg-opacity-90 rounded-2xl px-5 py-3 sm:w-1/2">
                <label className="block text-gray-400 text-xs mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent text-white outline-none border-b border-gray-500/50 focus:border-[#00B4D8] pb-1"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="group bg-[#2b3045] bg-opacity-90 rounded-2xl px-5 py-3 sm:w-1/2">
                <label className="block text-gray-400 text-xs mb-1">
                  Last Name
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full bg-transparent text-white outline-none border-b border-gray-500/50 focus:border-[#00B4D8] pb-1"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <User className="text-white ml-3 w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group bg-[#2b3045] bg-opacity-90 rounded-2xl px-5 py-3">
              <label className="block text-gray-400 text-xs mb-1">Email</label>
              <input
                type="email"
                className="w-full bg-transparent text-white outline-none border-b border-gray-500/50 focus:border-[#00B4D8] pb-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="group bg-[#2b3045] bg-opacity-90 rounded-2xl px-5 py-3 relative">
              <label className="block text-gray-400 text-xs mb-1">
                Password
              </label>

              <div className="flex items-center relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-transparent text-white outline-none border-b border-gray-500/50 focus:border-[#00B4D8] pb-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {password.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col items-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#00B4D8] hover:bg-[#009ec0] text-white font-semibold py-3 px-8 rounded-full w-full flex items-center justify-center shadow-[0_0_15px_rgba(0,180,216,0.3)] hover:shadow-[0_0_25px_rgba(0,180,216,0.5)] transition-all"
              >
                {loading ? "Processing..." : "Sign Up"}
                {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
