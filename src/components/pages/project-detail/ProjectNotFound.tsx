import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "antd";
import { Sparkles } from "lucide-react";

const ProjectNotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4"
    >
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
          <Sparkles className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Project Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/gallery">
          <Button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg px-6 py-3">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectNotFound;
