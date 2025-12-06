import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useProjectStore } from "../store/projectStore";
import ProjectDetail from "../components/projects/ProjectDetail";
import {
  ProjectNotFound,
  ProjectHeader,
  ProjectHero,
  ProjectHeroImage,
  ProjectStatsCards,
  RelatedProjectsCTA,
  QuickFactsFooter,
} from "../components/pages/project-detail";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const { getProjectById } = useProjectStore();
  const project = getProjectById(id || "");

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      <ProjectHeader />
      <ProjectHero project={project} />
      <ProjectHeroImage project={project} />
      <ProjectStatsCards project={project} />

      {/* Project Details */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <ProjectDetail project={project} />
      </div>

      <RelatedProjectsCTA />
      <QuickFactsFooter />
    </motion.div>
  );
};

export default ProjectDetailPage;
