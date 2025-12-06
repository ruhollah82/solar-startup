import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";
import { useState } from "react";

interface ProjectHeroImageProps {
  project: {
    title: string;
    images: {
      main: string;
    };
  };
}

const ProjectHeroImage = ({ project }: ProjectHeroImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="relative -mt-12 mb-16 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video relative">
            <AnimatePresence>
              {!isImageLoaded && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"
                />
              )}
            </AnimatePresence>

            <motion.img
              src={project.images.main}
              alt={project.title}
              className="w-full h-full object-cover"
              onLoad={() => setIsImageLoaded(true)}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

            {/* Image Info */}
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live Monitoring</span>
              </div>
              <p className="text-sm opacity-90">
                Solar farm operating at peak efficiency
              </p>
            </div>
          </div>

          {/* Floating Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-6 right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-200 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">120+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectHeroImage;
