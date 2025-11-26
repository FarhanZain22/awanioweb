// src/context/LanguageContext.js
import React, { createContext, useState, useContext } from "react";

// 1. Membuat Context
const LanguageContext = createContext();

// 2. Membuat Provider (Penyedia Data)
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ID"); // Default bahasa ID

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

// 3. Custom hook agar mudah dipanggil
export const useLanguage = () => useContext(LanguageContext);
