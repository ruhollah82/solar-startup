import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import type { Project } from "../../types";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

  return (
    <div className="space-y-8">
      {/* Project Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-slate-800">
          Project Overview
        </h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-slate-800">
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-slate-800">
              Technical Specifications
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-600">Capacity</span>
                <span className="font-semibold">{project.capacity}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-600">Installation Date</span>
                <span className="font-semibold">
                  {new Date(project.installationDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-600">Status</span>
                <span
                  className={`font-semibold px-3 py-1 rounded-full text-sm ${
                    project.status === "completed"
                      ? "bg-emerald-100 text-emerald-800"
                      : project.status === "ongoing"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {project.status.charAt(0).toUpperCase() +
                    project.status.slice(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Project Gallery</h2>
          <span className="text-slate-500">
            {project.images.gallery.length} images
          </span>
        </div>

        {/* Main Image */}
        <div className="relative mb-6 rounded-xl overflow-hidden">
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={project.images.gallery[selectedImageIndex]}
              alt={`${project.title} - Image ${selectedImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Lightbox Trigger */}
            <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
              <DialogTrigger asChild>
                <Button
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  size="small"
                >
                  <Maximize2 className="h-5 w-5 text-white" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl p-0">
                <div className="relative h-[80vh]">
                  <img
                    src={project.images.gallery[selectedImageIndex]}
                    alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                          index === selectedImageIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-white font-medium">
                {selectedImageIndex + 1} / {project.images.gallery.length}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {project.images.gallery.map((image, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                selectedImageIndex === index
                  ? "border-emerald-500 ring-2 ring-emerald-200"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {selectedImageIndex === index && (
                <div className="absolute inset-0 bg-emerald-500/20" />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
