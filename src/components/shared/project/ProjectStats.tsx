import { motion } from "framer-motion";
import { Battery, Home } from "lucide-react";
import { useTranslation } from "../../../contexts/TranslationContext";

interface ProjectStatsProps {
  capacity: string;
  homesPowered: number;
  className?: string;
  delay?: number;
}

const ProjectStats = ({
  capacity,
  homesPowered,
  className = "space-y-3",
  delay = 0.6
}: ProjectStatsProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex items-center text-gray-500">
        <motion.div
          whileHover={{ scale: 1.2, color: "#f97316" }}
          transition={{ duration: 0.2 }}
        >
          <Battery className="h-4 w-4 ml-3" />
        </motion.div>
        <span className="text-sm font-medium">
          {capacity} {t.project.capacity}
        </span>
      </div>

      <div className="flex items-center text-gray-500">
        <motion.div
          whileHover={{ scale: 1.2, color: "#10b981" }}
          transition={{ duration: 0.2 }}
        >
          <Home className="h-4 w-4 ml-3" />
        </motion.div>
        <span className="text-sm font-medium">
          {homesPowered} {t.project.homesPowered}
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectStats;
