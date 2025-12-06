import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const GalleryHeader = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-6 mb-12"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-200 mb-4">
        <Sparkles className="h-4 w-4 text-orange-500" />
        <span className="text-sm font-medium text-orange-700">
          پروژه‌های انرژی پاک
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        پروژه‌های خورشیدی
        <span className="block mt-2 text-3xl md:text-4xl bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
          Solar Power Installations
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        نمونه کار ما از نصب‌های موفق خورشیدی را در مناطق و مقیاس‌های مختلف
        کاوش کنید. هر پروژه نمادی از تعهد ما به راه‌حل‌های انرژی پایدار است.
      </p>
    </motion.header>
  );
};

export default GalleryHeader;
