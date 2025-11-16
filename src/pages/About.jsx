import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const [index, setIndex] = React.useState(0);

  const slides = [
    {
      title: "Our Vision and Mission",
      text: "We aim to become the most trusted cloud ecosystem for Indonesia by enabling businesses to grow through resilient and secure infrastructure.",
    },
    {
      title: "Innovating for the Future",
      text: "We continuously improve our cloud platform to support organizations in accelerating digital transformation.",
    },
    {
      title: "Empowering Digital Ecosystems",
      text: "We collaborate with global technology partners to deliver optimized, efficient, and secure cloud solutions.",
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar active="about" />

      {/* ====================== TOP SECTION ====================== */}
      <section className="mt-28 text-center px-4">
        <h2 className="text-3xl font-bold text-blue-900">Who we are</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mt-3">
          Awanio is a cloud technology company focusing on platform-as-a-service,
          working with global partners to support enterprise-grade solutions.
        </p>
      </section>

      {/* ====================== CAROUSEL ====================== */}
      <section className="mt-10 flex justify-center">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((item, i) => (
              <div
                key={i}
                className="min-w-full p-8 flex items-center justify-between bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl"
              >
                {/* LEFT CONTENT */}
                <div
                  className={`transition-all duration-700 ${
                    index === i ? "scale-105" : "scale-95 opacity-70"
                  }`}
                >
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-gray-200 max-w-md">{item.text}</p>
                </div>

                {/* RIGHT DECOR (colored background, no image) */}
                <div
                  className={`w-64 h-40 rounded-2xl transition-all duration-700 ${
                    index === i
                      ? "bg-blue-600 scale-110"
                      : "bg-blue-500 scale-90 opacity-60 blur-[1px]"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === i ? "bg-blue-700" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== MILESTONE TITLE ====================== */}
      <section className="mt-20 text-center px-4">
        <h2 className="text-3xl font-bold text-blue-900">Our Milestones So Far</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mt-3">
          Explore our journey and achievements as we expand our partnerships and
          enhance our technology in the cloud ecosystem.
        </p>
      </section>

      {/* ====================== TIMELINE IMAGE ====================== */}
      <section className="flex justify-center mt-14 px-4">
        <div
          className="w-full max-w-4xl bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: "url('../src/assets/image-about/milestone.png')",
            minHeight: "1600px",
          }}
        ></div>
      </section>

      <div className="h-20" />

    {/* ========== FOOTER ========== */}
      <Footer active="about" />
    </div>
  );
};

export default About;
