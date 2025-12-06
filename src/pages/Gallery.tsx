import { motion } from "framer-motion";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { useTranslation } from "../contexts/TranslationContext";
import { useState, useEffect } from "react";
import {
  GalleryHeader,
  GalleryStats,
  GalleryCTA,
  QuickFacts,
} from "../components/pages/gallery";

const Gallery = () => {
  const { t } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress for background animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / 1000, 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      dir="rtl"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-green-500/10 to-emerald-500/5 rounded-full blur-3xl" />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              right: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="container mx-auto px-4 md:px-6 py-8 relative z-10">
        <GalleryHeader />
        <GalleryStats />

        {/* Gallery Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl">
                <span className="text-white">🔍</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  فیلتر پروژه‌ها
                </h2>
                <p className="text-gray-600 mt-1">
                  برای مشاهده جزئیات روی هر پروژه کلیک کنید
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-600">تکمیل شده</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-600">در حال انجام</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-600">برنامه‌ریزی شده</span>
                </div>
              </div>

              <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                <span className="font-semibold text-gray-700">۱۵۰</span> پروژه
                فعال
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <GalleryGrid />
        </motion.div>

        <GalleryCTA />
        <QuickFacts />
      </div>
    </motion.div>
  );
};

export default Gallery;
