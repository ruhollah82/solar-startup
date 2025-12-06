import { motion } from "framer-motion";

interface SlideIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onGoToSlide: (index: number) => void;
  className?: string;
}

const SlideIndicators = ({
  totalSlides,
  currentSlide,
  onGoToSlide,
  className = "flex items-center gap-3 order-1 md:order-2 mb-4 md:mb-0"
}: SlideIndicatorsProps) => {
  return (
    <div className={className}>
      {Array.from({ length: totalSlides }, (_, index) => (
        <motion.button
          key={index}
          onClick={() => onGoToSlide(index)}
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
        </motion.button>
      ))}
    </div>
  );
};

export default SlideIndicators;
