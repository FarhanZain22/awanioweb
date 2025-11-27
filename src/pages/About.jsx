import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight, Cloud, Target, Globe } from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import aboutImage from "../assets/image-about/about.png";

const About = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { language } = useLanguage();

  // Icon definitions
  const slideIcons = [<Cloud size={80} className="text-white" />, <Target size={80} className="text-white" />, <Globe size={80} className="text-white" />];

  // Text Translations
const translations = {
  ID: {
    headerTitle: "Siapa Kami",
    headerDesc:
      "Awanio bertujuan untuk mengatasi kompleksitas Infrastruktur TI bagi perusahaan dengan menghadirkan Platform Cloud Enabler yang dapat digunakan di lingkungan apa pun—on-premise, privat, atau publik cloud. Fokus pada pengembangan aplikasi yang menciptakan dampak positif bagi dunia yang lebih baik.",
    slides: [
      {
        title: "Kisah kami dimulai",
        text: "Didirikan pada tahun 2016, Awanio awalnya dibangun sebagai penyedia Platform as a Service (PaaS) yang mendukung kebutuhan kliennya akan hosting aplikasi dan data. Seiring berkembangnya bisnis kami, layanan Awanio terus berkembang sehingga kami tidak hanya dapat melayani segmen B2C tetapi juga B2B. Layanan yang diberikan Awanio untuk klien B2B adalah Cloud Enabler Platform yang dapat diinstal dan digunakan di Infrastruktur TI pengguna bisnis sehingga pengguna bisnis dapat mengatur infrastruktur TI mereka menggunakan perangkat lunak buatan Awanio.",
      },
      {
        title: "Visi dan Misi Kami",
        text: "Visi kami adalah menjadi Cloud Enabler dan IT Infrastructure Orchestrator Terkemuka di Dunia. Misi kami adalah untuk meningkatkan ekosistem cloud lokal melalui peningkatan kemampuan dan kemajuan teknologi, melampaui daya saing global, dan memberdayakan organisasi untuk memanfaatkan kekuatan komputasi awan.",
      },
      {
        title: "Mendukung bisnis secara berkelanjutan",
        text: "Saat ini, Awanio bangga menjadi penyedia solusi cloud mutakhir yang tepercaya yang memungkinkan perusahaan mencapai tujuan transformasi digital mereka. CEP kami membantu organisasi mengoptimalkan sumber daya Infrastruktur TI mereka, menyederhanakan manajemen infrastruktur mereka, dan mengurangi biaya operasional. Dengan pengalaman dan keahlian kami yang luas di industri ini, kami telah melayani klien di Indonesia, Belanda, Jerman, Malaysia, dan Singapura, dan berkomitmen untuk memperluas jangkauan kami ke negara lain untuk membantu lebih banyak perusahaan meningkatkan kualitas layanan teknologi informasi mereka.",
      },
    ],
    milestoneTitle: "Pencapaian Kami Sejauh Ini",
    milestoneDesc: "Didirikan pada tahun 2018, Awanio awalnya dibangun sebagai penyedia Platform as a Service (PaaS) untuk mendukung kebutuhan kliennya akan hosting aplikasi dan data.",
  },
  EN: {
    headerTitle: "Who We Are",
    headerDesc:
      "Awanio aims to overcome IT Infrastructure complexity for enterprises by delivering a Cloud Enabler Platform usable in any environment— on-premise, private, or public cloud. Focus on building applications that create an impact for a better world.",
    slides: [
      {
        title: "Our Story Began",
        text: "Founded in 2016, Awanio was initially built as a Platform as a Service (PaaS) provider that supports the needs of its clients for hosting applications and data. As our business grows, Awanio's services continues to expand so that we can serve not only B2C but also B2B segment. The services provided by Awanio for B2B clients is Cloud Enabler Platform that can be installed and used in the business user IT Infrastructure so that business users can orchestrate their IT infrastructure using Awanio's crafted software.",
      },
      {
        title: "Our Vision and Mission",
        text: "Our vision is to become the World-Leading Cloud Enabler and IT Infrastructure Orchestrator. We are on a mission to elevate the local cloud ecosystem through the enhancement of capabilities and the advancement of technologies, surpassing global competitiveness and empowering organizations to leverage the power of cloud computing.",
      },
      {
        title: "Support sustainable business",
        text: "Today, Awanio is proud to be a trusted provider of cutting-edge cloud solutions that enable businesses to achieve their digital transformation goals. Our CEP helps organizations optimize their IT Infrastructure resources, simplify their infrastructure management, and reduce operational costs. With our extensive experience and expertise in the industry, we have served clients in Indonesia, the Netherlands, Germany, Malaysia, and Singapore, and are committed to expanding our footprint to other countries to help more businesses improve the quality of their information technology services.",
      },
    ],
    milestoneTitle: "Our Milestones So Far",
    milestoneDesc: "Established in 2018, Awanio was initially built as a Platform as a Service (PaaS) provider to supports the needs of its clients for hosting applications and data.",
  },
};

  const text = translations[language];

  const slides = text.slides.map((item, i) => ({
    ...item,
    icon: slideIcons[i],
  }));

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Sedikit diperlambat ke 5 detik agar lebih nyaman dibaca
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-gray-900 font-sans transition-colors duration-300">
      <Navbar active="about" />

      {/* ====================== HEADER SECTION ====================== */}
      <section className="pt-32 pb-10 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-900 dark:text-white mb-4 tracking-tight transition-colors">{text.headerTitle}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">{text.headerDesc}</p>
        </div>
      </section>

      {/* ====================== CAROUSEL SECTION (FIXED) ====================== */}
      <section className="py-8 px-4 flex justify-center">
        <div className="relative w-full max-w-5xl group" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {/* Card Container - Menggunakan warna Biru solid seperti referensi gambar */}
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-blue-600 dark:bg-blue-800 transition-colors duration-300">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
              {slides.map((item, i) => (
                <div key={i} className="min-w-full relative flex items-center">
                  {/* Content Layout */}
                  <div className="w-full p-8 md:p-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 min-h-[450px]">
                    {/* Left: Text Content */}
                    <div className="flex-1 text-left space-y-4 z-10 text-white">
                      <h3 className="text-3xl font-bold tracking-wide">{item.title}</h3>
                      <p className="text-blue-100 text-lg leading-relaxed opacity-90">{item.text}</p>
                    </div>

                    {/* Right: Visual Icon (Circle Background) */}
                    <div className="flex-shrink-0 relative">
                      {/* Lingkaran luar transparan seperti di gambar referensi */}
                      <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-inner">
                        <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center">
                          <div className={`transform transition-all duration-700 ${index === i ? "scale-100 opacity-100" : "scale-75 opacity-50"}`}>{item.icon}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls: Arrows (Selalu terlihat di desktop untuk UX lebih baik) */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronRight size={28} />
          </button>

          {/* Controls: Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all duration-300 ${index === i ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ====================== MILESTONE TITLE ====================== */}
      <section className="mt-20 mb-8 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white transition-colors">{text.milestoneTitle}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg transition-colors">{text.milestoneDesc}</p>
        </div>
      </section>

      {/* ====================== TIMELINE IMAGE (NO BACKGROUND CARD) ====================== */}
      <section className="flex justify-center px-4 pb-20">
        {/* Container: Background, Border, Shadow DIHAPUS agar menyatu dengan parent */}
        <div className="w-full max-w-6xl">
          <img
            src={aboutImage}
            alt="Awanio Timeline"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      <Footer active="about" />
    </div>
  );
};

export default About;
