import { motion } from "framer-motion";

interface GalleryStatsProps {
  stats: {
    total: number;
    completed: number;
    ongoing: number;
    planned: number;
  };
}

const GalleryStats = ({ stats }: GalleryStatsProps) => {
  return (
    <div className="hidden lg:block mb-6">
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
    </div>
  );
};

export default GalleryStats;
