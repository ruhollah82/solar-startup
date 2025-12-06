import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProjectStore } from "../../store/projectStore";
import { useTranslation } from "../../contexts/TranslationContext";
import {
  ProjectBadge,
  ProjectInfo,
  CTAButtons,
} from "../shared/project";
import {
  SlideBackground,
  FloatingElements,
  SliderControls,
  SlideIndicators,
  ProgressBar,
} from "../shared/slider";
import { HeroTitle, HeroDescription } from "./index";

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
            <SlideBackground imageUrl={currentProject?.images.main} />
            <FloatingElements isMobile={isMobile} />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl lg:max-w-4xl">
              <ProjectBadge
                status={currentProject?.status || "completed"}
                label={t.hero?.latestProject || "پروژه برتر"}
              />

              <HeroTitle title={currentProject?.title} />

              <ProjectInfo
                location={currentProject?.location}
                installationDate={currentProject?.installationDate}
                capacity={currentProject?.capacity || "50kW"}
              />

              <HeroDescription description={currentProject?.description} />

              <CTAButtons
                projectId={currentProject?.id}
                isMobile={isMobile}
                primaryText={t.hero?.viewProject || "مشاهده پروژه"}
                secondaryText={t.hero?.allProjects || "همه پروژه‌ها"}
              />
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
            <SliderControls
              onPrevSlide={prevSlide}
              onNextSlide={nextSlide}
              onTogglePause={() => setIsPaused(!isPaused)}
              isPaused={isPaused}
            />

            <SlideIndicators
              totalSlides={projects.length}
              currentSlide={currentSlide}
              onGoToSlide={goToSlide}
            />

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

      <ProgressBar
        isPaused={isPaused}
        currentSlide={currentSlide}
        duration={6}
      />
    </div>
  );
};

export default HeroSlider;
