import { useEffect, useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    title: "Report Public Issues Instantly",
    desc: "From broken roads to water leakage, report problems in seconds and make your community better.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=80",
    highlight: "Fast Reporting",
  },
  {
    id: 2,
    title: "Track Issue Status in Real Time",
    desc: "Stay updated with every step — pending, in-progress, or resolved. Full transparency for everyone.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    highlight: "Live Tracking",
  },
  {
    id: 3,
    title: "Build a Better City Together",
    desc: "Your small report can fix big problems. Join a community that cares about real change.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    highlight: "Community Impact",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md mb-4 sm:mb-6 text-xs sm:text-sm">
          <FaCheckCircle className="text-green-400 shrink-0" />
          <span>{slide.highlight}</span>
        </div>

        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight px-2">
          {slide.title}
        </h1>

        <p className="mt-3 sm:mt-5 text-xs sm:text-sm md:text-lg text-gray-200 max-w-2xl mx-auto px-2 leading-relaxed">
          {slide.desc}
        </p>
        {/* buttons */}
        <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            to="/report-issues"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 px-5 sm:px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition text-sm sm:text-base"
          >
            Report Issue
            <FaArrowRight />
          </Link>

          <Link
            to="/all-issues"
            className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 px-5 sm:px-6 py-3 rounded-xl transition text-sm sm:text-base"
          >
            Explore Issues
          </Link>
        </div>
        <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 text-center text-white/90">
          <div>
            <p className="text-base sm:text-xl md:text-2xl font-bold">1000+</p>
            <p className="text-[10px] sm:text-sm">Issues</p>
          </div>

          <div>
            <p className="text-base sm:text-xl md:text-2xl font-bold">500+</p>
            <p className="text-[10px] sm:text-sm">Resolved</p>
          </div>

          <div>
            <p className="text-base sm:text-xl md:text-2xl font-bold">24/7</p>
            <p className="text-[10px] sm:text-sm">Support</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
              current === index ? "bg-blue-500" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
