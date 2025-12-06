import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Battery,
  Home,
  Zap,
  MapPin,
  Calendar,
  Leaf,
  Share2,
  Download,
  Globe,
  Users,
  TrendingUp,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useProjectStore } from "../store/projectStore";
import ProjectDetail from "../components/projects/ProjectDetail";
import { useState } from "react";
import { Button } from "antd";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const { getProjectById } = useProjectStore();
  const project = getProjectById(id || "");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  if (!project) {
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
  }

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

  const stats = [
    {
      icon: Zap,
      value: project.stats?.energyProduced || "45,000 kWh",
      label: "Annual Energy",
      color: "from-amber-500 to-orange-500",
      bg: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
      border: "border-amber-200",
    },
    {
      icon: Leaf,
      value: project.stats?.co2Saved || "32 tons",
      label: "CO₂ Saved",
      color: "from-green-500 to-emerald-500",
      bg: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      border: "border-green-200",
    },
    {
      icon: Home,
      value: `${project.stats?.homesPowered || 120}+`,
      label: "Homes Powered",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      border: "border-blue-200",
    },
    {
      icon: TrendingUp,
      value: "98.5%",
      label: "Efficiency",
      color: "from-purple-500 to-pink-500",
      bg: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      border: "border-purple-200",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Header with Navigation */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="  bg-white/80 backdrop-blur-md border-b border-gray-200"
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

      {/* Hero Section */}
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
                  statusColors[project.status]?.bg
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

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative -mt-12 mb-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <AnimatePresence>
                {!isImageLoaded && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"
                  />
                )}
              </AnimatePresence>

              <motion.img
                src={project.images.main}
                alt={project.title}
                className="w-full h-full object-cover"
                onLoad={() => setIsImageLoaded(true)}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

              {/* Image Info */}
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live Monitoring</span>
                </div>
                <p className="text-sm opacity-90">
                  Solar farm operating at peak efficiency
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-200 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">120+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="container mx-auto px-4 md:px-6 mb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className={`${stat.bg} ${stat.border} border rounded-3xl p-6 backdrop-blur-sm`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-gray-200 to-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Details */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <ProjectDetail project={project} />
      </div>

      {/* Related Projects CTA */}
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

      {/* Quick Facts Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white border-t border-gray-200 py-8"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Project Duration", value: "6 Months" },
              { label: "Solar Panels", value: "1,200 Units" },
              { label: "Investment", value: "$2.5M" },
              { label: "ROI Period", value: "5 Years" },
            ].map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {fact.value}
                </div>
                <div className="text-sm text-gray-600">{fact.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailPage;
