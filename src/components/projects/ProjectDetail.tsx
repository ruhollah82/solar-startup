import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  Calendar,
  Zap,
  Users,
  Clock,
  Shield,
  Battery,
  Sun,
  ArrowUpRight,
  Share2,
  Download,
  Grid,
} from "lucide-react";
import type { Project } from "../../types";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "antd";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === project.images.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? project.images.gallery.length - 1 : prev - 1
    );
  };

  // Status color mapping
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
    <div className="space-y-6 md:space-y-8">
      {/* Project Header with Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`px-4 py-1.5 rounded-full ${
                    statusColors[project.status]?.bg
                  } text-white text-sm font-bold`}
                >
                  {project.status.charAt(0).toUpperCase() +
                    project.status.slice(1)}
                </div>
                <div className="text-gray-400 text-sm">
                  {new Date(project.installationDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {project.title}
              </h1>

              <div className="flex items-center gap-4 text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <span>{project.capacity}</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Sun,
                label: "Annual Output",
                value: "45,000 kWh",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: Battery,
                label: "Efficiency",
                value: "98.5%",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Users,
                label: "Households",
                value: "120",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Clock,
                label: "Duration",
                value: "6 Months",
                color: "from-purple-500 to-pink-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 text-white shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm opacity-90">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
        {/* Left Column: Features & Specs */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg">
                      <Zap className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium leading-relaxed">
                        {feature}
                      </p>
                      <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 mt-2"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                  <Grid className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Project Gallery
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 text-sm bg-gray-100 px-3 py-1.5 rounded-full">
                  {selectedImageIndex + 1} / {project.images.gallery.length}
                </span>
                <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg"
                      size="small"
                    >
                      <Maximize2 className="h-4 w-4 mr-2" />
                      Fullscreen
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl p-0 border-0">
                    <div className="relative h-[80vh] bg-black">
                      <img
                        src={project.images.gallery[selectedImageIndex]}
                        alt={`${project.title} - Image ${
                          selectedImageIndex + 1
                        }`}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.gallery.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === selectedImageIndex
                                ? "bg-white scale-125"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative mb-6 rounded-2xl overflow-hidden border border-gray-200">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px]">
                <motion.img
                  src={project.images.gallery[selectedImageIndex]}
                  alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover cursor-zoom-in"
                  onClick={() => setIsLightboxOpen(true)}
                  animate={{
                    scale: isZoomed ? 1.5 : 1,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 hidden sm:block"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 hidden sm:block"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>

                {/* Mobile Navigation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:hidden">
                  <button
                    onClick={prevImage}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                  >
                    <ChevronLeft className="h-4 w-4 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                  >
                    <ChevronRight className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              <AnimatePresence mode="popLayout">
                {project.images.gallery.map((image, index) => (
                  <motion.button
                    key={index}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImageIndex === index
                        ? "border-orange-500 ring-2 ring-orange-200 shadow-lg"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {selectedImageIndex === index && (
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20" />
                    )}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Technical Specs & Info */}
        <div className="space-y-6 md:space-y-8">
          {/* Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 md:p-8 shadow-xl text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Technical Specs</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: "System Capacity",
                  value: project.capacity,
                  icon: Battery,
                },
                {
                  label: "Installation Date",
                  value: new Date(project.installationDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  ),
                  icon: Calendar,
                },
                { label: "Panel Type", value: "Monocrystalline", icon: Sun },
                { label: "Inverter Brand", value: "SMA Solar", icon: Shield },
                { label: "Annual Output", value: "45,000 kWh", icon: Zap },
                { label: "CO2 Reduction", value: "32 tons/year", icon: Shield },
              ].map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <spec.icon className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300">{spec.label}</span>
                  </div>
                  <span className="font-semibold">{spec.value}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-shadow duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Technical Sheet
            </motion.button>
          </motion.div>

          {/* Environmental Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-green-200"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Environmental Impact
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Carbon Offset</span>
                <span className="font-bold text-green-600">32 tons/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Equivalent Trees</span>
                <span className="font-bold text-green-600">1,450</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Homes Powered</span>
                <span className="font-bold text-green-600">120</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5" />
                <span className="font-bold">Sustainable Energy</span>
              </div>
              <p className="text-sm opacity-90">
                This project contributes to a cleaner environment and
                sustainable future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
