import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Zap } from "lucide-react";

interface GalleryItemProps {
  project: {
    id: string;
    title: string;
    shortDescription: string;
    location: string;
    installationDate: string;
    images: {
      main: string;
    };
  };
  index?: number;
}

const GalleryItem = ({ project, index = 0 }: GalleryItemProps) => {
  return (
    <Link to={`/project/${project.id}`}>
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="aspect-square overflow-hidden relative">
          <motion.img
            src={project.images.main}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Animated energy icon overlay */}
          <motion.div
            className="absolute inset-0 bg-orange-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0, rotate: 0 }}
            whileHover={{
              scale: 1,
              rotate: 360,
              transition: { duration: 0.5, ease: "easeOut" }
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <Zap className="h-12 w-12 text-orange-400 drop-shadow-lg" />
            </motion.div>
          </motion.div>

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
          />
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="absolute bottom-0 p-6 text-white w-full">
            <motion.h3
              className="text-xl font-bold mb-2 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-sm mb-4 leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.shortDescription}
            </motion.p>

            <motion.div
              className="flex items-center justify-between text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <MapPin className="h-4 w-4 mr-2 text-orange-400" />
                <span className="font-medium">{project.location}</span>
              </div>

              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Calendar className="h-4 w-4 mr-2 text-green-400" />
                <span className="font-medium">
                  {new Date(project.installationDate).getFullYear()}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hover border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-orange-500/0 group-hover:border-orange-500/50 transition-all duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
    </Link>
  );
};

export default GalleryItem;
