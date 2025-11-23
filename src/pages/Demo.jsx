import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgDemo from "../assets/image-demo/bg-demo.png";
import { useLanguage } from "../Context/LanguageContext";

const Demo = () => {
  // 2. Ambil State Bahasa
  const { language } = useLanguage();

  // 3. Definisikan Kamus Kata
  const translations = {
    ID: {
      heroTitle: "Majukan bisnis Anda",
      heroSubtitle: "Ingin tahu bagaimana kami melakukan keajaiban? Jangan ragu untuk meminta demo.",
      formTitle: "Permintaan Demo",
      formDesc: "Kirimkan kontak Anda dan kami akan segera menghubungi Anda",
      pName: "Nama",
      pEmail: "Email",
      pCompany: "Perusahaan",
      pJob: "Jabatan",
      pPhone: "Nomor Telepon (cth: +62)",
      pCity: "Kota",
      agreeText: "Saya telah membaca dan menyetujui ",
      policyText: "kebijakan privasi",
      companyName: " Awanio",
      btnSubmit: "Minta Demo",
    },
    EN: {
      heroTitle: "Move your business forward",
      heroSubtitle: "Wondering on how we do our magic? Do not hesitate to ask for demo.",
      formTitle: "Request Demo",
      formDesc: "Send us your contact and we’ll get back to you soon",
      pName: "Name",
      pEmail: "Email",
      pCompany: "Company",
      pJob: "Job Title",
      pPhone: "Phone Number (ex: +62)",
      pCity: "City",
      agreeText: "I have read and agree to Awanio’s ",
      policyText: "privacy policy",
      companyName: "",
      btnSubmit: "Request Demo",
    },
  };

  // 4. Pilih Teks
  const text = translations[language];

  return (
    <>
      <div
        className="min-h-screen relative"
        style={{
          background: `
            linear-gradient(
              180deg,
              #050D16 7%,
              #091727 28%,
              #112B49 48%,
              #0B1C2F 72%,
              #050D16 93%
            )
          `,
        }}
      >
        <Navbar active="demo" />

        {/* HERO + BACKGROUND */}
        <div className="w-full min-h-[600px] flex flex-col items-center pt-28 pb-20 px-4 relative">
          {/* Background Image */}
          <img src={bgDemo} alt="Background Demo" className="absolute top-0 left-0 w-full h-full object-cover opacity-90" />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-b from-[#002246]/80 via-[#003063]/70 to-[#061C36]"></div>

          {/* TEXT */}
          <div className="relative z-10 text-center max-w-3xl">
            {/* Teks Hero tetap putih karena background gradien selalu gelap */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">{text.heroTitle}</h1>

            <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed">{text.heroSubtitle}</p>
          </div>

          {/* FORM CARD */}
          {/* Tambahkan dark:bg-gray-800 dan transisi warna */}
          <div
            className="
              relative z-10 mt-10 
              bg-white dark:bg-gray-800 
              rounded-2xl shadow-xl 
              w-full max-w-xl px-8 py-10
              transition-colors duration-300
            "
          >
            {/* Judul Form: Hitam -> Putih */}
            <h2 className="font-semibold text-xl mb-1 text-gray-900 dark:text-white transition-colors">{text.formTitle}</h2>
            {/* Deskripsi Form: Abu -> Abu Terang */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 transition-colors">{text.formDesc}</p>

            {/* FORM INPUTS */}
            <div className="flex flex-col gap-4">
              {/* Input Styles:
                  - Background: Putih -> Abu Gelap (gray-700)
                  - Border: Abu -> Abu Gelap (gray-600)
                  - Text: Hitam -> Putih
              */}
              <input
                type="text"
                placeholder={text.pName}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00539B] dark:focus:border-[#00ADEE] transition-colors"
              />
              <input
                type="email"
                placeholder={text.pEmail}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00539B] dark:focus:border-[#00ADEE] transition-colors"
              />
              <input
                type="text"
                placeholder={text.pCompany}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00539B] dark:focus:border-[#00ADEE] transition-colors"
              />
              <input
                type="text"
                placeholder={text.pJob}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00539B] dark:focus:border-[#00ADEE] transition-colors"
              />
              <input
                type="text"
                placeholder={text.pPhone}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00539B] dark:focus:border-[#00ADEE] transition-colors"
              />
              <input
                type="text"
                placeholder={text.pCity}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00539B] dark:focus:border-[#00ADEE] transition-colors"
              />

              {/* Checkbox */}
              <label className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300 mt-2 cursor-pointer transition-colors">
                <input type="checkbox" className="mt-1 cursor-pointer accent-[#00539B] dark:accent-[#00ADEE]" />
                <span>
                  {text.agreeText}
                  <span className="text-[#0066CC] dark:text-[#4CA1E6] underline hover:text-[#003F7A] dark:hover:text-[#80CFFF] transition-colors">{text.policyText}</span>
                  {text.companyName}
                </span>
              </label>

              {/* BUTTON */}
              <button
                className="
                  bg-[#00539B] dark:bg-[#00ADEE] 
                  text-white dark:text-gray-900 font-bold
                  w-full py-3 rounded-lg mt-3 
                  hover:bg-[#003F7A] dark:hover:bg-[#008CC9] 
                  transition-colors text-sm
                "
              >
                {text.btnSubmit}
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
