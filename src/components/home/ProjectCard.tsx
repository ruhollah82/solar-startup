import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Battery, Home, Zap, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { useTranslation } from "../../contexts/TranslationContext";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    location: string;
    capacity: string;
    images: {
      main: string;
    };
    stats: {
      homesPowered: number;
    };
    status: string;
  };
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const { t } = useTranslation();

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full group"
    >
      <Link to={`/project/${project.id}`}>
        <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
          <div className="relative h-48 md:h-56 overflow-hidden">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={project.images.main}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              className="absolute top-3 right-3"
            >
              <Badge
                variant={project.status === "Completed" ? "filled" : "outlined"}
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg backdrop-blur-sm"
              >
                {project.status}
              </Badge>
            </motion.div>

            {/* Animated overlay with energy icon */}
            <motion.div
              className="absolute inset-0 bg-orange-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <Zap className="h-12 w-12 text-orange-500" />
              </motion.div>
            </motion.div>
          </div>

          <CardContent className="pt-6 px-6">
            <motion.h3
              className="text-xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-gray-600 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center text-gray-500">
                <motion.div
                  whileHover={{ scale: 1.2, color: "#f97316" }}
                  transition={{ duration: 0.2 }}
                >
                  <Battery className="h-4 w-4 ml-3" />
                </motion.div>
                <span className="text-sm font-medium">
                  {project.capacity} {t.project.capacity}
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
                  {project.stats.homesPowered} {t.project.homesPowered}
                </span>
              </div>
            </motion.div>
          </CardContent>

          <CardFooter className="border-t border-gray-100 pt-4 px-6">
            <motion.div
              className="flex items-center w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, color: "#0891b2" }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-4 w-4 ml-3" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                {project.location}
              </span>
            </motion.div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
