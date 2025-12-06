import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface FloatingElementsProps {
  isMobile?: boolean;
  className?: string;
}

const FloatingElements = ({
  isMobile = false,
  className = "absolute inset-0 overflow-hidden"
}: FloatingElementsProps) => {
  if (isMobile) return null;

  return (
    <div className={className}>
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
  );
};

export default FloatingElements;
