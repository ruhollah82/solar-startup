import { motion } from "framer-motion";
import { Grid3x3, Zap, TrendingUp, Sparkles } from "lucide-react";

interface GalleryFiltersProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

const GalleryFilters = ({ filter, onFilterChange }: GalleryFiltersProps) => {
  const filterButtons = [
    {
      key: "all",
      label: "All",
      icon: Grid3x3,
      color: "from-blue-500 to-purple-500",
    },
    {
      key: "completed",
      label: "Done",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
    },
    {
      key: "ongoing",
      label: "Active",
      icon: TrendingUp,
      color: "from-orange-500 to-amber-500",
    },
    {
      key: "planned",
      label: "Upcoming",
      icon: Sparkles,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <motion.div
      className="hidden lg:block"
    >
      {/* Filter Chips - Desktop */}
      <motion.div
        className="flex flex-wrap gap-2 sm:gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filterButtons.map(({ key, label, icon: Icon, color }, index) => (
          <motion.button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base ${
              filter === key
                ? `${color} text-white shadow-lg`
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-orange-300"
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{label}</span>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GalleryFilters;
