import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Grid3x3, Zap, TrendingUp, Sparkles } from "lucide-react";

interface GalleryMobileFiltersProps {
  showMobileFilters: boolean;
  onToggleMobileFilters: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: "date" | "location" | "title";
  onSortChange: (sort: "date" | "location" | "title") => void;
  filter: string;
  onFilterChange: (filter: string) => void;
  stats: {
    total: number;
    completed: number;
    ongoing: number;
    planned: number;
  };
}

const GalleryMobileFilters = ({
  showMobileFilters,
  onToggleMobileFilters,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  filter,
  onFilterChange,
  stats,
}: GalleryMobileFiltersProps) => {
  const sortOptions = [
    { value: "date", label: "Newest" },
    { value: "location", label: "Location" },
    { value: "title", label: "Name" },
  ];

  const filterButtons = [
    { key: "all", label: "All", color: "from-blue-500 to-purple-500" },
    { key: "completed", label: "Done", color: "from-green-500 to-emerald-500" },
    { key: "ongoing", label: "Active", color: "from-orange-500 to-amber-500" },
    { key: "planned", label: "Upcoming", color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={onToggleMobileFilters}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: showMobileFilters ? 90 : 0 }}
        >
          {showMobileFilters ? <X size={24} /> : <Search size={24} />}
        </motion.button>
      </div>

      {/* Mobile Filters Overlay */}
      <AnimatePresence>
        {showMobileFilters && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white border-t border-gray-200 rounded-t-3xl shadow-2xl p-6 max-h-[70vh] overflow-y-auto"
          >
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">Filters & Sort</h3>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort by
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => onSortChange(option.value as any)}
                      className={`px-3 py-2 text-sm rounded-lg border ${
                        sortBy === option.value
                          ? "bg-orange-500 text-white border-orange-500"
                          : "bg-gray-50 text-gray-700 border-gray-200"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by status
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {filterButtons.map(({ key, label, color }) => (
                    <button
                      key={key}
                      onClick={() => onFilterChange(key)}
                      className={`px-3 py-3 rounded-xl text-sm font-medium ${
                        filter === key
                          ? `${color} text-white shadow-md`
                          : "bg-gray-50 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="pt-4 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Projects Stats
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-500 text-white p-3 rounded-xl">
                    <div className="text-lg font-bold">{stats.total}</div>
                    <div className="text-xs opacity-90">Total</div>
                  </div>
                  <div className="bg-green-500 text-white p-3 rounded-xl">
                    <div className="text-lg font-bold">{stats.completed}</div>
                    <div className="text-xs opacity-90">Done</div>
                  </div>
                  <div className="bg-orange-500 text-white p-3 rounded-xl">
                    <div className="text-lg font-bold">{stats.ongoing}</div>
                    <div className="text-xs opacity-90">Active</div>
                  </div>
                  <div className="bg-indigo-500 text-white p-3 rounded-xl">
                    <div className="text-lg font-bold">{stats.planned}</div>
                    <div className="text-xs opacity-90">Upcoming</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryMobileFilters;
