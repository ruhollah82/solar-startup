import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useProjectStore } from "../../store/projectStore";
import { useTranslation } from "../../contexts/TranslationContext";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { getFeaturedProjects } = useProjectStore();
  const projects = getFeaturedProjects();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait" custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${projects[currentSlide]?.images.main})`,
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" as const }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-8">
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.8,
                  staggerChildren: 0.2,
                }}
                className="max-w-2xl text-white"
              >
                <motion.span
                  variants={childVariants}
                  className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-300 mb-4 border border-orange-400/30"
                >
                  <motion.span
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                  >
                    {t.hero.latestProject}
                  </motion.span>
                </motion.span>

                <motion.h1
                  variants={childVariants}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
                >
                  <motion.span
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="bg-gradient-to-r from-white via-orange-200 to-green-200 bg-clip-text text-transparent bg-[length:200%_200%]"
                  >
                    {projects[currentSlide]?.title}
                  </motion.span>
                </motion.h1>

                <motion.p
                  variants={childVariants}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed"
                >
                  {projects[currentSlide]?.description}
                </motion.p>

                <motion.div
                  variants={childVariants}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="large"
                      variant="outlined"
                      className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg font-semibold backdrop-blur-sm"
                    >
                      {t.hero.allProjects}
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="large"
                      className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg font-semibold"
                    >
                      {t.hero.viewProject}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="text-white h-6 w-6" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="text-white h-6 w-6" />
      </motion.button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-orange-500 w-8 shadow-lg"
                : "bg-white/50 w-3 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={{
              scale: index === currentSlide ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-orange-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        key={currentSlide}
        transition={{ duration: 6, ease: "linear" }}
      />
    </div>
  );
};

export default HeroSlider;
