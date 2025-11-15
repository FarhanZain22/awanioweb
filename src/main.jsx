import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Solution from "./pages/solution/";
import Landing from "./pages/Landing";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/solution" element={<Solution />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
