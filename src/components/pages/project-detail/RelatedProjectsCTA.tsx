import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Zap } from "lucide-react";
import { Button } from "antd";

const RelatedProjectsCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-black text-white py-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6"
          >
            <Zap className="h-8 w-8" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore More Solar Projects
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how we're powering communities around the world with
            clean, renewable energy.
          </p>

          <Link to="/gallery">
            <Button className="bg-gradient-to-r from-white to-gray-100 text-gray-900 hover:shadow-xl px-8 py-6 text-lg">
              View All Projects
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RelatedProjectsCTA;
