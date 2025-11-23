import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast"; // <<< WAJIB

import ScrollToTop from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Product from "./pages/Product";
import Solution from "./pages/solution/";
import Demo from "./pages/Demo";
import AdminChatPage from "./pages/AdminDashboard";
import LiveChat from "./components/LiveChat";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-center" /> {/* <<< TOAST RENDER DI SINI */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/admin" element={<AdminChatPage />} />
      </Routes>
      <LiveChat userName="Pengunjung" />
    </BrowserRouter>
  </StrictMode>
);
