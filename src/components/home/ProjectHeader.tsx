import { motion } from "framer-motion";

interface ProjectHeaderProps {
  title: string;
  description: string;
  delay?: number;
}

const ProjectHeader = ({
  title,
  description,
  delay = 0.4
}: ProjectHeaderProps) => {
  return (
    <>
      <motion.h3
        className="text-xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-gray-600 mb-4 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.1, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </>
  );
};

export default ProjectHeader;
