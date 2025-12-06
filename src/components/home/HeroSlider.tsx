import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Zap,
  MapPin,
  Calendar,
  ArrowRight,
  Award,
  TrendingUp,
} from "lucide-react";
import { useProjectStore } from "../../store/projectStore";
import { useTranslation } from "../../contexts/TranslationContext";
import { Button } from "antd";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { getFeaturedProjects } = useProjectStore();
  const projects = getFeaturedProjects();
  const { t } = useTranslation();

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide
  useEffect(() => {
    if (isPaused || projects.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  const statusColors = {
    completed: "bg-gradient-to-r from-green-500 to-emerald-500",
    ongoing: "bg-gradient-to-r from-orange-500 to-amber-500",
    planned: "bg-gradient-to-r from-blue-500 to-indigo-500",
  };

  if (projects.length === 0) return null;

  const currentProject = projects[currentSlide];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
      {/* Background Container */}
      <div className="relative h-[60vh] md:h-[80vh] lg:h-[85vh]">
        {/* Slides Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${currentProject?.images.main})`,
              }}
            >
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Subtle Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
                    backgroundSize: "40px 40px",
                  }}
                ></div>
              </div>
            </div>

            {/* Floating Elements - Only on Desktop */}
            {!isMobile && (
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    animate={{
                      y: [0, -40, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 6,
                      delay: i * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      left: `${15 + i * 20}%`,
                      top: `${20 + i * 15}%`,
                    }}
                  >
                    <Zap className="h-6 w-6 md:h-8 md:w-8 text-amber-400/30" />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl lg:max-w-4xl">
              {/* Project Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-4 md:mb-6"
              >
                <div
                  className={`px-3 py-1 rounded-full ${
                    statusColors[currentProject?.status || "completed"]
                  }`}
                >
                  <span className="text-xs md:text-sm font-bold">
                    {currentProject?.status?.charAt(0).toUpperCase() +
                      currentProject?.status?.slice(1)}
                  </span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <Award className="h-3 w-3 md:h-4 md:w-4 text-amber-400" />
                  <span className="text-xs md:text-sm">
                    {t.hero?.latestProject || "پروژه برتر"}
                  </span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white"
              >
                {currentProject?.title}
              </motion.h1>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8"
              >
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-xl">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-orange-400" />
                  <span className="text-sm md:text-base">
                    {currentProject?.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-xl">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
                  <span className="text-sm md:text-base">
                    {new Date(
                      currentProject?.installationDate || ""
                    ).getFullYear()}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-xl">
                  <Zap className="h-4 w-4 md:h-5 md:w-5 text-amber-400" />
                  <span className="text-sm md:text-base">
                    {currentProject?.capacity || "50kW"}
                  </span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base md:text-xl text-gray-200 mb-6 md:mb-10 leading-relaxed max-w-2xl"
              >
                {currentProject?.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to={`/project/${currentProject?.id}`} className="flex-1">
                  <Button
                    size={isMobile ? "middle" : "large"}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-xl hover:shadow-orange-500/25 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold gap-2 md:gap-3 group"
                  >
                    <span>{t.hero?.viewProject || "مشاهده پروژه"}</span>
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>

                <Link to="/gallery" className="flex-1">
                  <Button
                    size={isMobile ? "middle" : "large"}
                    variant="outlined"
                    className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold gap-2 md:gap-3"
                  >
                    {t.hero?.allProjects || "همه پروژه‌ها"}
                    <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator - Only on Desktop */}
        {/* {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-white/60"
            >
              <span className="text-sm mb-2">Scroll</span>
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        )} */}
      </div>

      {/* Controls Container */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Navigation Arrows & Play/Pause */}
            <div className="flex items-center gap-2 md:gap-4 order-2 md:order-1">
              <motion.button
                onClick={prevSlide}
                className="p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="text-white h-4 w-4 md:h-6 md:w-6" />
              </motion.button>

              <motion.button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPaused ? (
                  <Play className="text-white h-4 w-4 md:h-6 md:w-6" />
                ) : (
                  <Pause className="text-white h-4 w-4 md:h-6 md:w-6" />
                )}
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="text-white h-4 w-4 md:h-6 md:w-6" />
              </motion.button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-3 order-1 md:order-2 mb-4 md:mb-0">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    style={{
                      width: index === currentSlide ? "32px" : "12px",
                      height: "12px",
                    }}
                  />

                  {/* {index === currentSlide && (
                    <motion.div
                      className="absolute -top-1 -right-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-amber-400" />
                    </motion.div>
                  )} */}
                </motion.button>
              ))}
            </div>

            {/* Slide Counter
            <div className="order-3">
              <div className="flex items-center gap-2 text-white text-sm md:text-base">
                <span className="text-xl md:text-2xl font-bold">
                  {String(currentSlide + 1).padStart(2, "0")}
                </span>
                <span className="text-white/60">/</span>
                <span className="">
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500"
        key={currentSlide}
        initial={{ width: "0%" }}
        animate={{ width: !isPaused ? "100%" : "0%" }}
        transition={{ duration: 6, ease: "linear" }}
      />
    </div>
  );
};

export default HeroSlider;
