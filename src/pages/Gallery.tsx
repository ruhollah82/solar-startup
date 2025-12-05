import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { useTranslation } from "../contexts/TranslationContext";

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
          پروژه‌های خورشیدی ما
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          نمونه کار ما از نصب‌های موفق خورشیدی را در مناطق و مقیاس‌های مختلف کاوش کنید. هر پروژه نمادی از تعهد ما به راه‌حل‌های انرژی پایدار است.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "کل پروژه‌ها", value: "۱۵۰+" },
          { label: "ظرفیت نصب شده", value: "۵۰۰ مگاوات" },
          { label: "CO₂ ذخیره شده", value: "۳۵۰ هزار تن" },
          { label: "خانه‌های تأمین شده", value: "۲۵۰ هزار+" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm text-center"
          >
            <div className="text-2xl font-bold text-emerald-600">
              {stat.value}
            </div>
            <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 justify-between">
            <Filter className="h-5 w-5 text-emerald-500" />
            <h2 className="text-xl font-semibold text-slate-800">
              فیلتر پروژه‌ها
            </h2>
          </div>
          <span className="text-slate-500 text-sm">
            برای مشاهده جزئیات روی هر پروژه کلیک کنید
          </span>
        </div>

        <GalleryGrid />
      </div>
    </motion.div>
  );
};

export default Gallery;
