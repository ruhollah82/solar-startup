import { motion } from "framer-motion";
import { Calendar, MapPin, Zap, Globe } from "lucide-react";

interface ProjectHeroProps {
  project: {
    title: string;
    description: string;
    location: string;
    capacity: string;
    installationDate: string;
    region?: string;
    status: string;
  };
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
  const statusColors = {
    completed: {
      bg: "bg-gradient-to-r from-green-500 to-emerald-600",
      text: "text-green-800",
    },
    ongoing: {
      bg: "bg-gradient-to-r from-orange-500 to-amber-600",
      text: "text-orange-800",
    },
    planned: {
      bg: "bg-gradient-to-r from-blue-500 to-indigo-600",
      text: "text-blue-800",
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-amber-50/50" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + i * 5}%`,
            }}
          >
            <Zap className="h-6 w-6 text-orange-200/50" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-8 pb-16 relative z-10">
        {/* Project Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div
              className={`px-4 py-1.5 rounded-full ${
                statusColors[project.status as keyof typeof statusColors]?.bg
              } text-white text-sm font-bold`}
            >
              {project.status?.charAt(0).toUpperCase() +
                project.status?.slice(1)}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(project.installationDate).getFullYear()}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>{project.region || "Global"}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="h-5 w-5 text-orange-500" />
              <span className="text-lg">{project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Zap className="h-5 w-5 text-amber-500" />
              <span className="text-lg">{project.capacity}</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectHero;
