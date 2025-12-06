import { motion } from "framer-motion";
import { Zap, Leaf, Home, TrendingUp } from "lucide-react";

interface ProjectStatsCardsProps {
  project: {
    stats?: {
      energyProduced?: string;
      co2Saved?: string;
      homesPowered?: number;
    };
  };
}

const ProjectStatsCards = ({ project }: ProjectStatsCardsProps) => {
  const stats = [
    {
      icon: Zap,
      value: project.stats?.energyProduced || "45,000 kWh",
      label: "Annual Energy",
      color: "from-amber-500 to-orange-500",
      bg: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
      border: "border-amber-200",
    },
    {
      icon: Leaf,
      value: project.stats?.co2Saved || "32 tons",
      label: "CO₂ Saved",
      color: "from-green-500 to-emerald-500",
      bg: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      border: "border-green-200",
    },
    {
      icon: Home,
      value: `${project.stats?.homesPowered || 120}+`,
      label: "Homes Powered",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      border: "border-blue-200",
    },
    {
      icon: TrendingUp,
      value: "98.5%",
      label: "Efficiency",
      color: "from-purple-500 to-pink-500",
      bg: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      border: "border-purple-200",
    },
  ];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="container mx-auto px-4 md:px-6 mb-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{
              y: -8,
              transition: { duration: 0.2 },
            }}
            className={`${stat.bg} ${stat.border} border rounded-3xl p-6 backdrop-blur-sm`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl`}
              >
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            </div>
            <div className="h-1.5 w-full bg-gradient-to-r from-gray-200 to-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectStatsCards;
