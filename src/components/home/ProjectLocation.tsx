import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface ProjectLocationProps {
  location: string;
  delay?: number;
}

const ProjectLocation = ({
  location,
  delay = 0.7
}: ProjectLocationProps) => {
  return (
    <motion.div
      className="flex items-center w-full"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.2, color: "#0891b2" }}
        transition={{ duration: 0.2 }}
      >
        <MapPin className="h-4 w-4 ml-3" />
      </motion.div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
        {location}
      </span>
    </motion.div>
  );
};

export default ProjectLocation;
