import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import GalleryItem from "../GalleryItem";

interface GalleryGridContentProps {
  filteredProjects: any[];
  viewMode: "grid" | "list";
  filter: string;
  searchQuery: string;
}

const GalleryGridContent = ({
  filteredProjects,
  viewMode,
  filter,
  searchQuery,
}: GalleryGridContentProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      {/* Results Count - Mobile */}
      <div className="lg:hidden mb-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{filteredProjects.length}</span>{" "}
          projects
          {searchQuery && (
            <span>
              {" "}
              for "<span className="font-semibold">{searchQuery}</span>"
            </span>
          )}
        </div>
        <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {filter === "all" ? "All" : filter}
        </div>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        {filteredProjects.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 text-sm">
              Try adjusting your filters or search term
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={filter + viewMode}
            layout
            className={`grid gap-4 sm:gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  exit="exit"
                  className={`${
                    viewMode === "list" ? "max-w-4xl mx-auto w-full" : ""
                  }`}
                >
                  <GalleryItem
                    project={project}
                    index={index}
                    viewMode={viewMode}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGridContent;
