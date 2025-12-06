import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Users, Zap } from "lucide-react";
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import InfoItem from "./InfoItem";

interface GalleryItemGridProps {
  project: {
    id: string;
    title: string;
    shortDescription: string;
    location: string;
    installationDate: string;
    images: {
      main: string;
    };
    category?: string;
    capacity?: string;
    status?: string;
  };
  index?: number;
}

const GalleryItemGrid = ({ project, index = 0 }: GalleryItemGridProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/project/${project.id}`}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        {/* Image Container */}
        <div className="aspect-square overflow-hidden relative">
          <motion.img
            src={project.images.main}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <StatusBadge status={project.status} />

          {/* Energy Icon - Only on Desktop */}
          <motion.div
            className="absolute top-3 right-3 hidden md:block"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
              <Zap className="w-4 h-4 text-amber-500" />
            </div>
          </motion.div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "100%" : "-100%" }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          {/* Title */}
          <h3 className="text-base md:text-lg font-bold text-gray-900 line-clamp-2 mb-2">
            {project.title}
          </h3>

          {/* Description - Only on Desktop */}
          <p className="text-gray-600 text-sm hidden md:block line-clamp-2 mb-4">
            {project.shortDescription}
          </p>

          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <InfoItem
              icon="location"
              value={project.location}
              className="flex-1 min-w-0"
            />

            <InfoItem
              icon="date"
              value={new Date(project.installationDate).getFullYear().toString()}
            />
          </div>

          {/* Additional Info - Only on Hover (Desktop) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="hidden md:block mt-4 pt-4 border-t border-gray-100"
              >
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>6 months</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{project.capacity || "50kW"}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile View Arrow */}
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100 flex justify-end">
            <ArrowUpRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Hover Border Effect - Only on Desktop */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-orange-500/0 group-hover:border-orange-500/30 transition-all duration-300 hidden md:block"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
    </Link>
  );
};

export default GalleryItemGrid;
