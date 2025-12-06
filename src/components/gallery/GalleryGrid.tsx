import { useState, useEffect } from "react";
import { useProjectStore } from "../../store/projectStore";
import {
  GalleryControls,
  GalleryStats,
  GalleryFilters,
  GalleryMobileFilters,
  GalleryGridContent,
} from "./components";

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


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <GalleryMobileFilters
        showMobileFilters={showMobileFilters}
        onToggleMobileFilters={() => setShowMobileFilters(!showMobileFilters)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        filter={filter}
        onFilterChange={setFilter}
        stats={stats}
      />

      <GalleryControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <GalleryStats stats={stats} />

      <GalleryFilters filter={filter} onFilterChange={setFilter} />

      <GalleryGridContent
        filteredProjects={filteredProjects}
        viewMode={viewMode}
        filter={filter}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default GalleryGrid;
