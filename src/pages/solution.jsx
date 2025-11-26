import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import Footer from "../components/Footer";
import images from "../assets";
import { useLanguage } from "../Context/LanguageContext";

const Solution = () => {
  // 1. Ambil state bahasa dari Context
  const { language } = useLanguage();

  // 2. Definisikan Kamus Kata (Translations)
  const translations = {
    ID: {
      heroTitle: "Solusi Awanio",
      heroDesc: "Lihat apa yang dapat dicapai Awanio untuk Anda dan bisnis Anda.",
      cloudTitle: "Cloud Enabler",
      cloudSubtitle: "Awanio memungkinkan solusi cloud end-to-end bagi pelanggan.",
      privateCloudTitle: "Private Cloud",
      cardSoe: "Badan Usaha Milik Negara (BUMN)",
      cardDefense: "Institusi Pertahanan",
      publicCloudTitle: "Public Cloud",
      cardIndoCloud: "Penyedia Layanan Cloud Indonesia",
      cardNethCloud: "Penyedia Layanan Cloud Belanda",
      hyperTitle: "Transcendent Hyper Converged",
      hyperDescBold: "Buka potensi penuh Anda dengan Awanio HCI",
      hyperDescNormal:
        ", infrastruktur hyper-converged terbaik, kolaborasi antara Awanio CEP dan prinsipal perangkat keras untuk menyediakan satu-satunya solusi HCI bersertifikat TKDN bagi pelanggan.",
      cardX86: "Arsitektur X86",
      cardLinuxOne: "IBM LinuxOne",
      cardPower: "IBM Power",
      securityTitle: "Keamanan",
      securityDesc: "Menghadirkan rangkaian layanan keamanan khusus yang eksklusif, disesuaikan untuk memenuhi kebutuhan keamanan unik organisasi.",
      cardThreat: "Intelijen Ancaman dengan Platform Analisis Data",
      cardTraffic: "Pemetaan Lalu Lintas & Konektivitas",
      cardDepth: "Analisis kejadian mendalam dengan informasi metadata",
      cardCluster: "Manajemen Klaster untuk menyeimbangkan kinerja sistem",
      cardAutomation: "Pemrosesan playbook otomatisasi untuk mengurangi MTTR",
      dataTitle: "Modernisasi Data",
      dataDesc: "Migrasikan data Anda ke database berbasis cloud modern dari database lama yang usang atau terisolasi (siloed), termasuk data terstruktur dan tidak terstruktur.",
      cardDataModern: "Modernisasi Data",
    },
    EN: {
      heroTitle: "Awanio Solutions",
      heroDesc: "See what Awanio can accomplish for you and your business.",
      cloudTitle: "Cloud Enabler",
      cloudSubtitle: "Awanio enables an end-to-end cloud solutions for customers.",
      privateCloudTitle: "Private Cloud",
      cardSoe: "State Owned Enterprise",
      cardDefense: "Defense Institution",
      publicCloudTitle: "Public Cloud",
      cardIndoCloud: "Indonesia Cloud Service Provider",
      cardNethCloud: "Netherland Cloud Service Provider",
      hyperTitle: "Transcendent Hyper Converged",
      hyperDescBold: "Unleash your full potential with Awanio HCI",
      hyperDescNormal: " the ultimate hyper-converged infrastructure, collaboration between Awanio CEP and hardware Principles to provide customers with the only TKDN-certified HCI solution.",
      cardX86: "X86 Architecture",
      cardLinuxOne: "IBM LinuxOne",
      cardPower: "IBM Power",
      securityTitle: "Security",
      securityDesc: "Bring you an exclusive range of specialized security services, tailored to meet the unique security requirements of organizations.",
      cardThreat: "Threat Intel with Data Analytics Platform",
      cardTraffic: "Traffic & Connectivity Mapping",
      cardDepth: "In-Depth event analysis with metadata information",
      cardCluster: "Cluster Management for balancing system performance",
      cardAutomation: "Automation playbook processing to reduce MTTR",
      dataTitle: "Data Modernization",
      dataDesc: "Migrate your data to modern cloud-based databases from outdated or siloed legacy databases, including structured and unstructured data.",
      cardDataModern: "Data Modernization",
    },
  };

  // 3. Pilih teks berdasarkan bahasa yang aktif
  const text = translations[language];

  return (
    <>
      <Navbar active="solution" />

      {/* ========== MAIN CONTENT ========== */}
      {/* Tambahkan dark:bg-gray-900 agar tidak ada celah putih */}
      <main className="transition-colors duration-300 dark:bg-gray-900">
        {/* ========== HERO SECTION ========== */}
        <section>
          {/* Gambar Hero tidak perlu diubah, teks di atasnya sudah putih */}
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[640px] bg-cover bg-center">
            {/* Background Image */}
            <img src={images.solutionHero} alt="Awanio Solution Hero" className="absolute inset-0 w-full h-full object-cover" />

            {/* Text Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl mb-2 sm:mb-4">{text.heroTitle}</h1>
              <p className="text-gray-200 text-sm sm:text-lg lg:text-xl max-w-[600px] leading-relaxed">{text.heroDesc}</p>
            </div>
          </div>
        </section>

        {/* ========== CLOUD ENABLER SECTION ========== */}
        {/* Background section: Putih abu -> Abu gelap */}
        <section className="bg-[#F8F9FB] dark:bg-gray-900 pb-20 transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto pt-20">
            {/* Title & Subtitle */}
            <div className="text-center mb-12">
              <h2 className="text-[32px] font-bold text-[#1E1E1E] dark:text-white transition-colors">{text.cloudTitle}</h2>
              <p className="text-[#555] dark:text-gray-400 text-[16px] mt-2 transition-colors">{text.cloudSubtitle}</p>
            </div>

            {/* Content Box: Putih -> Abu medium */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 transition-colors duration-300 shadow-sm dark:shadow-none">
              {/* ========== PRIVATE CLOUD ========== */}
              <div className="mb-12">
                <h3 className="text-[#1E1E1E] dark:text-gray-100 font-semibold text-lg mb-6 transition-colors">{text.privateCloudTitle}</h3>

                <div className="flex justify-between gap-4">
                  <Card icon={images.state} title={text.cardSoe} variant="blue" />
                  <Card icon={images.defense} title={text.cardDefense} variant="blue" />
                </div>
              </div>

              {/* ========== PUBLIC CLOUD ========== */}
              <div>
                <h3 className="text-[#1E1E1E] dark:text-gray-100 font-semibold text-lg mb-6 transition-colors">{text.publicCloudTitle}</h3>

                <div className="flex justify-between gap-4">
                  <Card icon={images.indo} title={text.cardIndoCloud} variant="blue" />
                  <Card icon={images.belanda} title={text.cardNethCloud} variant="blue" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== HYPER SECTION ========== */}
        {/* Background image tidak perlu diubah, text sudah putih */}
        <section className="relative w-full h-full pb-10 lg:h-[700px] bg-cover bg-center" style={{ backgroundImage: `url(${images.hyperbg})` }}>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-24">
            {/* Judul & Deskripsi */}
            <div className="text-white mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-[28px] sm:text-[32px] font-bold mb-2 lg:mb-3">{text.hyperTitle}</h2>

              <p className="max-w-[700px] text-xs sm:text-sm lg:text-[16px] leading-relaxed">
                <span className="font-semibold">{text.hyperDescBold}</span>
                {text.hyperDescNormal}
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Card icon={images.x86} title={text.cardX86} variant="hyper" />
              <Card icon={images.ibmlinux} title={text.cardLinuxOne} variant="hyper" />
              <Card icon={images.ibmpower} title={text.cardPower} variant="hyper" />
            </div>
          </div>
        </section>

        {/* ========== SECURITY SECTION ========== */}
        {/* Background section: Putih abu -> Abu gelap */}
        <section className="bg-[#F8F9FB] dark:bg-gray-900 py-12 sm:py-16 lg:py-20 transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-right mb-8 sm:mb-10 lg:mb-14 flex flex-col items-end">
              <h2 className="text-[28px] sm:text-[32px] font-bold text-[#1E1E1E] dark:text-white transition-colors">{text.securityTitle}</h2>
              <p className="text-[#555] dark:text-gray-400 text-sm sm:text-[16px] mt-2 max-w-[480px] leading-relaxed transition-colors">{text.securityDesc}</p>
            </div>

            {/* Cards Container: Putih -> Abu medium */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm transition-colors duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card icon={images.intel} title={text.cardThreat} variant="default" />
                <Card icon={images.trafic} title={text.cardTraffic} variant="default" />
                <Card icon={images.linechart} title={text.cardDepth} variant="default" />
                <Card icon={images.cluster} title={text.cardCluster} variant="default" />
                <Card icon={images.automation} title={text.cardAutomation} variant="default" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== DATA MODERNIZATION SECTION ========== */}
        {/* Background Image aman karena ada overlay hitam */}
        <section className="relative w-full h-auto lg:h-[700px] bg-cover bg-center" style={{ backgroundImage: `url(${images.datamodern})` }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 h-auto lg:h-full flex flex-col items-center justify-center text-center">
            {/* Title */}
            <h2 className="text-white font-bold text-[28px] sm:text-[32px] mb-3 lg:mb-4">{text.dataTitle}</h2>

            {/* Description */}
            <p className="text-gray-200 max-w-[650px] text-sm sm:text-base lg:text-[16px] leading-relaxed mb-8 lg:mb-12">{text.dataDesc}</p>

            {/* Card */}
            <div className="w-full flex justify-center">
              <Card icon={images.data} title={text.cardDataModern} variant="datamodern" />
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <Footer active="solution" />
    </>
  );
};

export default Solution;
