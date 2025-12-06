import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import InfoItem from "./InfoItem";

interface GalleryItemListProps {
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
}

const GalleryItemList = ({ project }: GalleryItemListProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/project/${project.id}`}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image Container */}
          <div className="md:w-64 lg:w-80 relative overflow-hidden">
            <div className="aspect-square md:aspect-auto md:h-full">
              <motion.img
                src={project.images.main}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent md:hidden" />

              <StatusBadge status={project.status} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 md:p-6">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 line-clamp-2">
                    {project.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isHovered ? 45 : 0 }}
                    className="hidden md:block"
                  >
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>

                <p className="text-gray-600 text-sm md:text-base mt-2 line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>

              {/* Info Cards */}
              <div className="mt-4 md:mt-6 space-y-3">
                <InfoItem
                  icon="location"
                  value={project.location}
                  className="truncate"
                />

                <InfoItem
                  icon="date"
                  value={new Date(project.installationDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                    }
                  )}
                />

                {project.capacity && (
                  <InfoItem
                    icon="capacity"
                    value={project.capacity}
                  />
                )}
              </div>

              {/* Mobile Arrow */}
              <div className="mt-4 md:hidden flex justify-end">
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default GalleryItemList;
