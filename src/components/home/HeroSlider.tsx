import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Zap,
  MapPin,
  Calendar,
  ArrowRight,
  Sparkles,
  Award,
  TrendingUp,
} from "lucide-react";
import { Button } from "../ui/button";
import { useProjectStore } from "../../store/projectStore";
import { useTranslation } from "../../contexts/TranslationContext";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { getFeaturedProjects } = useProjectStore();
  const projects = getFeaturedProjects();
  const { t } = useTranslation();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      nextSlide();
    } else if (swipe > swipeConfidenceThreshold) {
      prevSlide();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  const statusColors = {
    completed: "bg-gradient-to-r from-green-500 to-emerald-500",
    ongoing: "bg-gradient-to-r from-orange-500 to-amber-500",
    planned: "bg-gradient-to-r from-blue-500 to-indigo-500",
  };

  return (
    <div
      className="relative h-[80vh] md:h-[90vh] rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/10 to-amber-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Slides Container */}
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            filter: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Parallax Background Image */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${projects[currentSlide]?.images.main})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/5" />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                 linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                animate={{
                  y: [0, -100, 0],
                  rotate: [0, 360, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 8,
                  delay: i * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                }}
              >
                <Zap className="h-8 w-8 text-amber-400/50" />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-4xl text-white"
              >
                {/* Project Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 mb-6"
                >
                  <div
                    className={`px-3 py-1 rounded-full ${
                      statusColors[
                        projects[currentSlide]?.status || "completed"
                      ]
                    }`}
                  >
                    <span className="text-sm font-bold">
                      {projects[currentSlide]?.status?.charAt(0).toUpperCase() +
                        projects[currentSlide]?.status?.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-amber-400" />
                    <span className="text-sm">
                      {t.hero?.latestProject || "پروژه برتر"}
                    </span>
                  </div>
                </motion.div>

                {/* Title with Gradient */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                >
                  <span className="bg-gradient-to-r from-white via-amber-200 to-orange-200 bg-clip-text text-transparent">
                    {projects[currentSlide]?.title}
                  </span>
                </motion.h1>

                {/* Project Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap items-center gap-6 mb-8"
                >
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <MapPin className="h-5 w-5 text-orange-400" />
                    <span className="text-lg">
                      {projects[currentSlide]?.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <Calendar className="h-5 w-5 text-green-400" />
                    <span className="text-lg">
                      {new Date(
                        projects[currentSlide]?.installationDate || ""
                      ).getFullYear()}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <Zap className="h-5 w-5 text-amber-400" />
                    <span className="text-lg">
                      {projects[currentSlide]?.capacity || "50kW"}
                    </span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl"
                >
                  {projects[currentSlide]?.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to={`/project/${projects[currentSlide]?.id}`}>
                    <Button
                      size="large"
                      className="bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-xl hover:shadow-orange-500/25 px-8 py-4 text-lg font-semibold gap-3 group"
                    >
                      <span>{t.hero?.viewProject || "مشاهده پروژه"}</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>

                  <Link to="/gallery">
                    <Button
                      size="large"
                      variant="outlined"
                      className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 text-lg font-semibold gap-3"
                    >
                      {t.hero?.allProjects || "همه پروژه‌ها"}
                      <TrendingUp className="h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 shadow-2xl"
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="text-white h-6 w-6" />
        </motion.button>

        {/* Play/Pause */}
        <motion.button
          onClick={() => setIsPaused(!isPaused)}
          className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPaused ? (
            <Play className="text-white h-6 w-6" />
          ) : (
            <Pause className="text-white h-6 w-6" />
          )}
        </motion.button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-3">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <motion.div
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 w-12 shadow-lg"
                    : "bg-white/50 w-3 hover:bg-white/70"
                }`}
                animate={{
                  scale: index === currentSlide ? 1.2 : 1,
                }}
              />

              {index === currentSlide && (
                <motion.div
                  className="absolute -top-1 -right-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <Sparkles className="h-4 w-4 text-amber-400" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={nextSlide}
          className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 shadow-2xl"
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="text-white h-6 w-6" />
        </motion.button>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500"
        key={currentSlide}
        initial={{ width: "0%" }}
        animate={{ width: isPaused ? "100%" : "0%" }}
        transition={{ duration: 6, ease: "linear" }}
      />

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/20"
      >
        <div className="text-white text-sm font-medium">
          <span className="text-2xl font-bold">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span className="mx-2 text-white/60">/</span>
          <span className="text-lg">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </motion.div>

      {/* Drag Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 hidden md:block"
      >
        <div className="text-white/60 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          ← Drag برای تغییر اسلاید →
        </div>
      </motion.div>

      {/* Gradient Edge Effects */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/50 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/50 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
};

export default HeroSlider;
