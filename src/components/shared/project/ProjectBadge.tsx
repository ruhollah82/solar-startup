import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface ProjectBadgeProps {
  status: string;
  label?: string;
  className?: string;
}

const ProjectBadge = ({
  status,
  label = "پروژه برتر",
  className = "inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-4 md:mb-6"
}: ProjectBadgeProps) => {
  const statusColors = {
    completed: "bg-gradient-to-r from-green-500 to-emerald-500",
    ongoing: "bg-gradient-to-r from-orange-500 to-amber-500",
    planned: "bg-gradient-to-r from-blue-500 to-indigo-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={className}
    >
      <div
        className={`px-3 py-1 rounded-full ${
          statusColors[status as keyof typeof statusColors] || statusColors.completed
        }`}
      >
        <span className="text-xs md:text-sm font-bold">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="flex items-center gap-1 md:gap-2">
        <Award className="h-3 w-3 md:h-4 md:w-4 text-amber-400" />
        <span className="text-xs md:text-sm">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectBadge;
