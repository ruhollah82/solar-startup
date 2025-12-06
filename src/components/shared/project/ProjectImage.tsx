import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface ProjectImageProps {
  imageUrl: string;
  alt: string;
  className?: string;
  showHoverEffect?: boolean;
  showOverlayEffect?: boolean;
}

const ProjectImage = ({
  imageUrl,
  alt,
  className = "relative h-48 md:h-56 overflow-hidden",
  showHoverEffect = true,
  showOverlayEffect = true
}: ProjectImageProps) => {
  return (
    <div className={className}>
      <motion.div
        className="w-full h-full"
        whileHover={showHoverEffect ? { scale: 1.1 } : undefined}
        transition={showHoverEffect ? { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } : undefined}
      >
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        {showOverlayEffect && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Animated overlay with energy icon */}
            <motion.div
              className="absolute inset-0 bg-orange-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <Zap className="h-12 w-12 text-orange-500" />
              </motion.div>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectImage;
