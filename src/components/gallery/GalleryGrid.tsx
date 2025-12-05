import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GalleryItem from "./GalleryItem";
import { useProjectStore } from "../../store/projectStore";
import {
  Filter,
  Search,
  Grid3x3,
  List,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Zap,
  Menu,
  X,
} from "lucide-react";

const GalleryGrid = () => {
  const { projects } = useProjectStore();
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "location" | "title">("date");
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    ongoing: 0,
    planned: 0,
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Calculate statistics
  useEffect(() => {
    setStats({
      total: projects.length,
      completed: projects.filter((p) => p.status.toLowerCase() === "completed")
        .length,
      ongoing: projects.filter((p) => p.status.toLowerCase() === "ongoing")
        .length,
      planned: projects.filter((p) => p.status.toLowerCase() === "planned")
        .length,
    });
  }, [projects]);

  // Filter and sort projects
  const filteredProjects = projects
    .filter((project) => {
      const matchesFilter =
        filter === "all" || project.status.toLowerCase() === filter;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return (
            new Date(b.installationDate).getTime() -
            new Date(a.installationDate).getTime()
          );
        case "location":
          return a.location.localeCompare(b.location);
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

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

  const sortOptions = [
    { value: "date", label: "Newest" },
    { value: "location", label: "Location" },
    { value: "title", label: "Name" },
  ];

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: showMobileFilters ? 90 : 0 }}
        >
          {showMobileFilters ? <X size={24} /> : <Filter size={24} />}
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
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                      onClick={() => setSortBy(option.value as any)}
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
                      onClick={() => setFilter(key)}
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

      {/* Header */}
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
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 shadow-sm"
              />
            </div>

            {/* Desktop Controls Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Sort */}
              <div className="relative">
                <motion.select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
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
                    onClick={() => setViewMode(mode as any)}
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

          {/* Stats Cards - Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                label: "Total Projects",
                value: stats.total,
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
              },
              {
                label: "Completed",
                value: stats.completed,
                color: "bg-gradient-to-br from-green-500 to-emerald-600",
              },
              {
                label: "Ongoing",
                value: stats.ongoing,
                color: "bg-gradient-to-br from-orange-500 to-amber-600",
              },
              {
                label: "Planned",
                value: stats.planned,
                color: "bg-gradient-to-br from-indigo-500 to-purple-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`${stat.color} rounded-2xl p-4 text-white shadow-lg`}
              >
                <div className="text-xl sm:text-2xl font-bold">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

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
                onClick={() => setFilter(key)}
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
        </div>
      </motion.div>

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
    </div>
  );
};

export default GalleryGrid;
