import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface SliderControlsProps {
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onTogglePause: () => void;
  isPaused: boolean;
  className?: string;
}

const SliderControls = ({
  onPrevSlide,
  onNextSlide,
  onTogglePause,
  isPaused,
  className = "flex items-center gap-2 md:gap-4 order-2 md:order-1"
}: SliderControlsProps) => {
  return (
    <div className={className}>
      <motion.button
        onClick={onPrevSlide}
        className="p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="text-white h-4 w-4 md:h-6 md:w-6" />
      </motion.button>

      <motion.button
        onClick={onTogglePause}
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
        onClick={onNextSlide}
        className="p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="text-white h-4 w-4 md:h-6 md:w-6" />
      </motion.button>
    </div>
  );
};

export default SliderControls;
