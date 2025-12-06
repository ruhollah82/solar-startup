import { motion } from "framer-motion";
import { Search, Grid3x3, List, ChevronDown } from "lucide-react";

interface GalleryControlsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: "date" | "location" | "title";
  onSortChange: (sort: "date" | "location" | "title") => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

const GalleryControls = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}: GalleryControlsProps) => {
  const sortOptions = [
    { value: "date", label: "Newest" },
    { value: "location", label: "Location" },
    { value: "title", label: "Name" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Project Gallery
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Explore our solar energy installations worldwide
        </p>
      </div>

      {/* Desktop Controls - Hidden on mobile */}
      <div className="hidden lg:block space-y-6">
        {/* Search and Controls */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects by title or location..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Desktop Controls Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Sort */}
            <div className="relative">
              <motion.select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as any)}
                className="appearance-none w-full sm:w-auto px-6 py-3 pr-10 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 shadow-sm cursor-pointer text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </motion.select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* View Toggle */}
            <div className="flex bg-white rounded-xl p-1 border border-gray-200 shadow-sm">
              {[
                { mode: "grid", icon: Grid3x3 },
                { mode: "list", icon: List },
              ].map(({ mode, icon: Icon }) => (
                <motion.button
                  key={mode}
                  onClick={() => onViewModeChange(mode as any)}
                  className={`px-3 sm:px-4 py-2 rounded-lg flex items-center gap-1 sm:gap-2 transition-all duration-300 text-sm sm:text-base ${
                    viewMode === mode
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="capitalize">{mode}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryControls;
