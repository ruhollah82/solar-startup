import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2, Download } from "lucide-react";
import { Button } from "antd";

const ProjectHeader = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/gallery">
            <motion.div
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                <ArrowLeft className="h-5 w-5" />
              </div>
              <span className="font-medium hidden sm:inline">
                Back to Gallery
              </span>
            </motion.div>
          </Link>

          <div className="flex items-center gap-3">
            <Button
              variant="outlined"
              size="small"
              className="text-gray-600 hover:text-gray-900"
            >
              <Share2 className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Share</span>
            </Button>
            <Button
              variant="outlined"
              size="small"
              className="text-gray-600 hover:text-gray-900"
            >
              <Download className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">PDF</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default ProjectHeader;
