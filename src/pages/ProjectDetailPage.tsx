import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Battery,
  Home,
  Zap,
  MapPin,
  Calendar,
  Leaf,
} from "lucide-react";
import { useProjectStore } from "../store/projectStore";
import { Button } from "../components/ui/button";
import ProjectDetail from "../components/projects/ProjectDetail";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const { getProjectById } = useProjectStore();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/gallery">
          <Button>Back to Gallery</Button>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Back Button */}
      <Link to="/gallery">
        <Button variant="text" className="mb-8">
          <ArrowLeft className="mr-2" />
          Back to Projects
        </Button>
      </Link>

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12">
        <img
          src={project.images.main}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {project.location}
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {project.installationDate}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <ProjectDetail project={project} />

      {/* Stats */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl text-center">
          <Zap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <div className="text-3xl font-bold text-emerald-700">
            {project.stats.energyProduced}
          </div>
          <p className="text-slate-600">Annual Energy Production</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl text-center">
          <Leaf className="h-12 w-12 text-amber-600 mx-auto mb-4" />
          <div className="text-3xl font-bold text-amber-700">
            {project.stats.co2Saved}
          </div>
          <p className="text-slate-600">CO₂ Saved Annually</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
          <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <div className="text-3xl font-bold text-blue-700">
            {project.stats.homesPowered.toLocaleString()}+
          </div>
          <p className="text-slate-600">Homes Powered</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailPage;
