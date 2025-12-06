import { motion } from "framer-motion";

interface ProgressBarProps {
  isPaused: boolean;
  currentSlide: number;
  duration?: number;
  className?: string;
}

const ProgressBar = ({
  isPaused,
  currentSlide,
  duration = 6,
  className = "absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500"
}: ProgressBarProps) => {
  return (
    <motion.div
      className={className}
      key={currentSlide}
      initial={{ width: "0%" }}
      animate={{ width: !isPaused ? "100%" : "0%" }}
      transition={{ duration, ease: "linear" }}
    />
  );
};

export default ProgressBar;
