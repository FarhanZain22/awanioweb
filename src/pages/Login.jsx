import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import images from "../assets";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Login Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Ambil data user dari Firestore
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const { username } = docSnap.data();

        alert(`Selamat datang, ${username}!`);

        // 🚀 Redirect 100% berhasil
        navigate("/admin", { replace: true });

      } else {
        alert("Data user tidak ditemukan di Firestore!");
      }

    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
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

      {/* Main */}
      <div className="container mx-auto px-6 z-10 flex h-full items-center justify-center md:justify-start">
        <div className="w-full max-w-md md:ml-10 mx-4">
          <div className="mb-10">
            <h1 className="text-4xl text-white font-bold mb-3">
              Sign in<span className="text-[#00B4D8]">.</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <a href="/register" className="text-[#00B4D8] hover:underline">
                Sign up
              </a>
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6" onSubmit={handleLogin}>
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
              <label className="block text-gray-400 text-xs mb-1">Password</label>
              <div className="relative">
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
                    className="absolute right-0 top-1 text-white"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                )}
              </div>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00B4D8] hover:bg-[#009ec0] text-white font-semibold py-3 rounded-full flex items-center justify-center mt-4"
            >
              {loading ? "Loading..." : "Sign in"}
              {!loading && <ArrowRight className="ml-2" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
