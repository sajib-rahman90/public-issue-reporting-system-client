import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const textVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const Banner = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] flex items-center justify-center">
              {/* background */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/60 sm:bg-black/55 md:bg-black/60" />

              {/* content wrapper */}
              <div className="relative z-10 w-full max-w-4xl lg:max-w-5xl px-4 sm:px-6 text-center text-white">
                {/* badge */}
                <motion.div
                  key={slide.id + "badge"}
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="inline-flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full backdrop-blur-md mb-4 sm:mb-6 text-[11px] sm:text-sm"
                >
                  <FaCheckCircle className="text-green-400 shrink-0 text-sm sm:text-base" />
                  <span>{slide.highlight}</span>
                </motion.div>

                {/* title */}
                <motion.h1
                  key={slide.id + "title"}
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight px-1"
                >
                  {slide.title}
                </motion.h1>

                {/* description */}
                <motion.p
                  key={slide.id + "desc"}
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-3 sm:mt-5 text-[11px] sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-xl sm:max-w-2xl mx-auto px-2 leading-relaxed"
                >
                  {slide.desc}
                </motion.p>

                {/* buttons */}
                <motion.div
                  key={slide.id + "btn"}
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="mt-5 sm:mt-7 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center"
                >
                  <Link
                    to="/report-issues"
                    className="bg-orange-500 hover:bg-orange-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 transition text-xs sm:text-sm md:text-base"
                  >
                    Report Issue
                    <FaArrowRight className="text-xs sm:text-sm" />
                  </Link>

                  <Link
                    to="/all-issues"
                    className="bg-white text-black hover:bg-gray-200 px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl transition text-xs sm:text-sm md:text-base"
                  >
                    Explore Issues
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
