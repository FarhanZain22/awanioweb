import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "./Context/LanguageContext"; // Pastikan file fisiknya bernama LanguageContext.jsx
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Product from "./pages/Product";
import Solution from "./pages/solution";
import Demo from "./pages/Demo";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminChatPage from "./pages/AdminDashboard";
import LiveChat from "./components/LiveChat";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* 1. LanguageProvider ditaruh di sini agar membungkus SELURUH aplikasi */}
      <LanguageProvider>
        <ScrollToTop />
        <Toaster position="top-center" />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/admin" element={<AdminChatPage />} />
        </Routes>

        {/* LiveChat sekarang ada di dalam Provider, aman jika butuh fitur bahasa */}
        <LiveChat userName="Pengunjung" />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
