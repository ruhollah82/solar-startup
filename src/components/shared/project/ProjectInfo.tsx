import { motion } from "framer-motion";
import { MapPin, Calendar, Zap } from "lucide-react";

interface ProjectInfoProps {
  location: string;
  installationDate?: string;
  capacity?: string;
  className?: string;
  delay?: number;
}

const ProjectInfo = ({
  location,
  installationDate,
  capacity = "50kW",
  className = "flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8",
  delay = 0.4
}: ProjectInfoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={className}
    >
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-xl">
        <MapPin className="h-4 w-4 md:h-5 md:w-5 text-orange-400" />
        <span className="text-sm md:text-base">
          {location}
        </span>
      </div>
      {installationDate && (
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-xl">
          <Calendar className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
          <span className="text-sm md:text-base">
            {new Date(installationDate).getFullYear()}
          </span>
        </div>
      )}
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-xl">
        <Zap className="h-4 w-4 md:h-5 md:w-5 text-amber-400" />
        <span className="text-sm md:text-base">
          {capacity}
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectInfo;
