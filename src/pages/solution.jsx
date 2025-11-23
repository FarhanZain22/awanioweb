import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import Footer from "../components/Footer";
import images from "../assets";


const Solution = () => {
  return (
    <>
      <Navbar active="solution" />
      {/* ========== MAIN CONTENT ========== */}
      <main>
        {/* ========== HERO SECTION ========== */}
        <section>
          <div className=" relative w-full h-[380px] sm:h-[480px] lg:h-[640px] bg-cover bg-center">
            {/* Background Image */}
            <img src={images.solutionHero} alt="Awanio Solution Hero" className="absolute inset-0 w-full h-full object-cover" />

            {/* Text Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl mb-2 sm:mb-4">Awanio Solutions</h1>
              <p className="text-gray-200 text-sm sm:text-lg lg:text-xl max-w-[600px] leading-relaxed">See what Awanio can accomplish for you and your business.</p>
            </div>
          </div>
        </section>

        {/* ========== CLOUD ENABLER SECTION ========== */}
        <section className="bg-[#F8F9FB] pb-20">
          <div className="max-w-[1200px] mx-auto pt-20">
            {/* Title & Subtitle */}
            <div className="text-center mb-12">
              <h2 className="text-[32px] font-bold text-[#1E1E1E]">Cloud Enabler</h2>
              <p className="text-[#555] text-[16px] mt-2">Awanio enables an end-to-end cloud solutions for customers.</p>
            </div>

            {/* Content Box */}
            <div className="bg-white rounded-2xl p-10">
              {/* ========== PRIVATE CLOUD ========== */}
              <div className="mb-12">
                <h3 className="text-[#1E1E1E] font-semibold text-lg mb-6">Private Cloud</h3>

                <div className="flex justify-between">
                  <Card icon={images.state} title="State Owned Enterprise" variant="blue" />
                  <Card icon={images.defense} title="Defense Institution" variant="blue" />
                </div>
              </div>

              {/* ========== PUBLIC CLOUD ========== */}
              <div>
                <h3 className="text-[#1E1E1E] font-semibold text-lg mb-6">Public Cloud</h3>

                <div className="flex justify-between">
                  <Card icon={images.indo} title="Indonesia Cloud Service Provider" variant="blue" />
                  <Card icon={images.belanda} title="Netherland Cloud Service Provider" variant="blue" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== HYPER SECTION ========== */}
        <section className=" relative w-full  h-full  pb-10 lg:h-[700px] bg-cover bg-center" style={{ backgroundImage: `url(${images.hyperbg})` }}>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-24">
            {/* Judul & Deskripsi */}
            <div className="text-white mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-[28px] sm:text-[32px] font-bold mb-2 lg:mb-3">Transcendent Hyper Converged</h2>

              <p className="max-w-[700px] text-xs sm:text-sm lg:text-[16px] leading-relaxed">
                <span className="font-semibold">Unleash your full potential with Awanio HCI</span> the ultimate hyper-converged infrastructure, collaboration between Awanio CEP and hardware Principles
                to provide customers with the only TKDN-certified HCI solution.
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Card icon={images.x86} title="X86 Architecture" variant="hyper" />
              <Card icon={images.ibmlinux} title="IBM LinuxOne" variant="hyper" />
              <Card icon={images.ibmpower} title="IBM Power" variant="hyper" />
            </div>
          </div>
        </section>

        {/* ========== SECURITY SECTION ========== */}
        <section className="bg-[#F8F9FB] py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-right mb-8 sm:mb-10 lg:mb-14 flex flex-col items-end">
              <h2 className="text-[28px] sm:text-[32px]  font-bold text-[#1E1E1E]">Security</h2>
              <p className="text-[#555] text-sm sm:text-[16px] mt-2 max-w-[480px] leading-relaxed">
                Bring you an exclusive range of specialized security services, tailored to meet the unique security requirements of organizations.
              </p>
            </div>

            {/* Cards */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card icon={images.intel} title="Threat Intel with Data Analytics Platform" variant="default" />
                <Card icon={images.trafic} title="Traffic & Connectivity Mapping" variant="default" />
                <Card icon={images.linechart} title="In-Depth event analysis with metadata information" variant="default" />
                <Card icon={images.cluster} title="Cluster Management for balancing system performance" variant="default" />
                <Card icon={images.automation} title="Automation playbook processing to reduce MTTR" variant="default" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== DATA MODERNIZATION SECTION ========== */}
        <section className=" relative w-full  h-auto lg:h-[700px]  bg-cover bg-center " style={{ backgroundImage: `url(${images.datamodern})` }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className=" relative z-10  max-w-[1200px]  mx-auto  px-4 sm:px-6 lg:px-8  py-16 lg:py-0  h-auto lg:h-full  flex flex-col items-center justify-center  text-center  ">
            {/* Title */}
            <h2 className=" text-white  font-bold ttext-[28px] sm:text-[32px]  mb-3 lg:mb-4 ">Data Modernization</h2>

            {/* Description */}
            <p className=" text-gray-200 max-w-[650px] text-sm sm:text-base lg:text-[16px]  leading-relaxed mb-8 lg:mb-12  ">
              Migrate your data to modern cloud-based databases from outdated or siloed legacy databases, including structured and unstructured data.
            </p>
            {/* Card */}
            <div className="w-full flex justify-center">
              <Card icon={images.data} title="Data Modernization" variant="datamodern" />
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
