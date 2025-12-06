import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ProjectImage, ProjectStats } from "../shared/project";
import { ProjectHeader, ProjectLocation } from "./index";

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
          <ProjectImage
            imageUrl={project.images.main}
            alt={project.title}
            className="relative h-48 md:h-56 overflow-hidden"
          />

          <CardContent className="pt-6 px-6">
            <ProjectHeader
              title={project.title}
              description={project.description}
              delay={0.4 + index * 0.1}
            />

            <ProjectStats
              capacity={project.capacity}
              homesPowered={project.stats.homesPowered}
              delay={0.6 + index * 0.1}
            />
          </CardContent>

          <CardFooter className="border-t border-gray-100 pt-4 px-6">
            <ProjectLocation
              location={project.location}
              delay={0.7 + index * 0.1}
            />
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
