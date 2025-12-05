import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GalleryItem from "./GalleryItem";
import { useProjectStore } from "../../store/projectStore";

const GalleryGrid = () => {
  const { projects } = useProjectStore();
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.status.toLowerCase() === filter);

  const filterButtons = ["all", "completed", "ongoing", "planned"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.9,
    },
  };

  return (
    <div>
      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap gap-3 mb-8 justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {filterButtons.map((status, index) => (
          <motion.button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-6 py-3 rounded-full capitalize font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
              filter === status
                ? "bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-orange-500/25"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-orange-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {status}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.2,
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                exit="exit"
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <GalleryItem project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;
