import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import images from "../assets";
import { useLanguage } from "../Context/LanguageContext";

const Solution = () => {
  const { language } = useLanguage();

  const translations = {
    ID: {
      heroTitle: "Solusi Awanio",
      heroDesc: "Lihat apa yang dapat dicapai Awanio untuk Anda dan bisnis Anda.",
      cloudTitle: "Cloud Enabler",
      cloudSubtitle: "Awanio memungkinkan solusi cloud end-to-end bagi pelanggan.",
      privateCloudTitle: "Private Cloud",
      privateCloudCards: [
        { title: "Badan Usaha Milik Negara (BUMN)", icon: images.state },
        { title: "Institusi Pertahanan", icon: images.defense },
      ],
      publicCloudTitle: "Public Cloud",
      publicCloudCards: [
        { title: "Penyedia Layanan Cloud Indonesia", icon: images.indo },
        { title: "Penyedia Layanan Cloud Belanda", icon: images.belanda },
      ],
      hyperTitle: "Transcendent Hyper Converged",
      hyperDesc: "Buka potensi penuh Anda dengan Awanio HCI, infrastruktur hyper-converged terbaik, kolaborasi antara Awanio CEP dan prinsipal perangkat keras untuk menyediakan satu-satunya solusi HCI bersertifikat TKDN bagi pelanggan.",
      hyperCards: [
        { title: "Arsitektur X86", icon: images.x86 },
        { title: "IBM LinuxOne", icon: images.ibmlinux },
        { title: "IBM Power", icon: images.ibmpower },
      ],
      securityTitle: "Keamanan",
      securityDesc: "Menghadirkan rangkaian layanan keamanan khusus yang eksklusif, disesuaikan untuk memenuhi kebutuhan keamanan unik organisasi.",
      securityCards: [
        { title: "Intelijen Ancaman dengan Platform Analisis Data", icon: images.intel },
        { title: "Pemetaan Lalu Lintas & Konektivitas", icon: images.trafic },
        { title: "Analisis kejadian mendalam dengan informasi metadata", icon: images.linechart },
        { title: "Manajemen Klaster untuk menyeimbangkan kinerja sistem", icon: images.cluster },
        { title: "Pemrosesan playbook otomatisasi untuk mengurangi MTTR", icon: images.automation },
      ],
      dataTitle: "Modernisasi Data",
      dataDesc: "Migrasikan data Anda ke database berbasis cloud modern dari database lama yang usang atau terisolasi (siloed).",
      dataCards: [{ title: "Modernisasi Data", icon: images.data }]
    },
    EN: {
      heroTitle: "Awanio Solutions",
      heroDesc: "See what Awanio can accomplish for you and your business.",
      cloudTitle: "Cloud Enabler",
      cloudSubtitle: "Awanio enables an end-to-end cloud solutions for customers.",
      privateCloudTitle: "Private Cloud",
      privateCloudCards: [
        { title: "State Owned Enterprise", icon: images.state },
        { title: "Defense Institution", icon: images.defense },
      ],
      publicCloudTitle: "Public Cloud",
      publicCloudCards: [
        { title: "Indonesia Cloud Service Provider", icon: images.indo },
        { title: "Netherland Cloud Service Provider", icon: images.belanda },
      ],
      hyperTitle: "Transcendent Hyper Converged",
      hyperDesc: "Unleash your full potential with Awanio HCI, the ultimate hyper-converged infrastructure, collaboration between Awanio CEP and hardware Principles to provide customers with the only TKDN-certified HCI solution.",
      hyperCards: [
        { title: "X86 Architecture", icon: images.x86 },
        { title: "IBM LinuxOne", icon: images.ibmlinux },
        { title: "IBM Power", icon: images.ibmpower },
      ],
      securityTitle: "Security",
      securityDesc: "Bring you an exclusive range of specialized security services, tailored to meet the unique security requirements of organizations.",
      securityCards: [
        { title: "Threat Intel with Data Analytics Platform", icon: images.intel },
        { title: "Traffic & Connectivity Mapping", icon: images.trafic },
        { title: "In-Depth event analysis with metadata information", icon: images.linechart },
        { title: "Cluster Management for balancing system performance", icon: images.cluster },
        { title: "Automation playbook processing to reduce MTTR", icon: images.automation },
      ],
      dataTitle: "Data Modernization",
      dataDesc: "Migrate your data to modern cloud-based databases from outdated or siloed legacy databases.",
      dataCards: [{ title: "Data Modernization", icon: images.data }]
    },
  };

  const text = translations[language];

  return (
    <>
      <Navbar active="solution" />

      <main className="transition-colors duration-300 bg-white dark:bg-[#0B1221]">
        
        {/* HERO SECTION */}
        <section>
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[640px]">
            <img src={images.solutionHero} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 h-full flex flex-col justify-center">
              <h1 className="text-white font-bold text-4xl lg:text-6xl leading-tight">{text.heroTitle}</h1>
              <p className="text-gray-200 text-lg max-w-[600px] mt-4">{text.heroDesc}</p>
            </div>
          </div>
        </section>

        {/* CLOUD ENABLER SECTION */}
        <section className="py-24 transition-colors">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-[36px] font-bold text-[#00ADEE]">{text.cloudTitle}</h2>
              <p className="text-gray-500 dark:text-gray-300 mt-4">{text.cloudSubtitle}</p>
            </div>

            {/* Private & Public Cloud Cards */}
            {[
              { title: text.privateCloudTitle, cards: text.privateCloudCards },
              { title: text.publicCloudTitle, cards: text.publicCloudCards }
            ].map((group, idx) => (
              <div key={idx} className={idx === 0 ? "mb-16" : ""}>
                <h3 className="text-xl font-bold text-[#0B1F44] dark:text-white mb-8 border-l-4 border-[#00ADEE] pl-4">{group.title}</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  {group.cards.map((card, i) => (
                    <div key={i} className="bg-[#F8F9FB] dark:bg-[#161F32] p-8 rounded-2xl flex items-center gap-6 border border-gray-100 dark:border-gray-700/50 shadow-sm relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#00ADEE] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                      <img src={card.icon} alt={card.title} className="w-16 h-16 object-contain" />
                      <span className="text-lg font-semibold text-[#1E1E1E] dark:text-gray-200">{card.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6">
          <hr className="border-t-2 border-gray-100 dark:border-gray-800" />
        </div>

        {/* HYPER CONVERGED SECTION - Desain disamakan dengan Security/Modernization */}
        <section className="py-24 transition-colors">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[600px] mb-12">
              <h2 className="text-3xl font-bold text-[#1E1E1E] dark:text-white mb-4">{text.hyperTitle}</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-[800px]">{text.hyperDesc}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {text.hyperCards.map((card, i) => (
                <div key={i} className="bg-[#F8F9FB] dark:bg-[#161F32] p-8 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm relative overflow-hidden group flex flex-col items-start">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00ADEE] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <img src={card.icon} alt={card.title} className="w-12 h-12 mb-4 object-contain" />
                  <h3 className="text-[#1E1E1E] dark:text-white font-bold text-lg group-hover:text-[#00ADEE] transition-colors">{card.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6">
          <hr className="border-t-2 border-gray-100 dark:border-gray-800" />
        </div>

        {/* SECURITY SECTION */}
        <section className="py-24 transition-colors">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[600px] mb-12">
              <h2 className="text-3xl font-bold text-[#1E1E1E] dark:text-white mb-4">{text.securityTitle}</h2>
              <p className="text-gray-600 dark:text-gray-300">{text.securityDesc}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {text.securityCards.map((card, i) => (
                <div key={i} className="bg-[#F8F9FB] dark:bg-[#161F32] p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00ADEE] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <img src={card.icon} alt={card.title} className="w-12 h-12 mb-4 object-contain" />
                  <h3 className="text-[#1E1E1E] dark:text-white font-semibold text-[15px] leading-snug group-hover:text-[#00ADEE] transition-colors">{card.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6">
          <hr className="border-t-2 border-gray-100 dark:border-gray-800" />
        </div>

        {/* DATA MODERNIZATION SECTION - Menggunakan Desain Kotak Besar tapi Efek Tetap Security */}
        <section className="py-24 transition-colors bg-white dark:bg-[#0B1221]">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#1E1E1E] dark:text-white mb-4">{text.dataTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-[700px] mx-auto mb-12">{text.dataDesc}</p>
            
            <div className="inline-flex items-center gap-6 bg-[#F8F9FB] dark:bg-[#161F32] p-10 rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-md relative overflow-hidden group text-left">
              {/* Efek Garis Biru di Samping seperti Security */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[#00ADEE] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <img src={images.data} alt="Data" className="w-12 h-12 mb-4 object-contain" />
              <h3 className="text-[#1E1E1E] dark:text-white font-semibold text-[15px] leading-snug group-hover:text-[#00ADEE] transition-colors">{text.dataCards[0].title}</h3>
            </div>
          </div>
        </section>
      </main>

      <Footer active="solution" />
    </>
  );
};

export default Solution;