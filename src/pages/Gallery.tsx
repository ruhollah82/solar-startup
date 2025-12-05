import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  Zap,
  MapPin,
  Calendar,
  Leaf,
  Home,
  TrendingUp,
  Sparkles,
  Grid3x3,
  ChevronDown,
  Search,
} from "lucide-react";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { useTranslation } from "../contexts/TranslationContext";
import { useState, useEffect } from "react";

const Gallery = () => {
  const { t } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

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

  // Animate stats in on mount
  useEffect(() => {
    setTimeout(() => setIsStatsVisible(true), 300);
  }, []);

  const stats = [
    {
      label: "کل پروژه‌ها",
      value: "۱۵۰+",
      icon: Grid3x3,
      color: "from-blue-500 to-purple-500",
      delay: 0,
    },
    {
      label: "ظرفیت نصب شده",
      value: "۵۰۰ مگاوات",
      icon: Zap,
      color: "from-amber-500 to-orange-500",
      delay: 0.1,
    },
    {
      label: "CO₂ ذخیره شده",
      value: "۳۵۰ هزار تن",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      delay: 0.2,
    },
    {
      label: "خانه‌های تأمین شده",
      value: "۲۵۰ هزار+",
      icon: Home,
      color: "from-cyan-500 to-blue-500",
      delay: 0.3,
    },
  ];

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
        {/* Header */}
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

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isStatsVisible ? 1 : 0,
            y: isStatsVisible ? 0 : 20,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: stat.delay, duration: 0.5 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className={`bg-gradient-to-br ${stat.color} rounded-3xl p-6 text-white shadow-xl`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <stat.icon className="h-6 w-6" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: stat.delay + 0.3 }}
                  className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full"
                >
                  #{index + 1}
                </motion.div>
              </div>

              <div className="text-2xl md:text-3xl font-bold mb-2">
                {stat.value}
              </div>

              <div className="text-sm opacity-90">{stat.label}</div>

              <motion.div
                className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden mt-4"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: stat.delay + 0.4, duration: 1 }}
              >
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${70 + index * 10}%` }}
                  transition={{ delay: stat.delay + 0.5, duration: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

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
                <Filter className="h-6 w-6 text-white" />
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 mb-8"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 30px 30px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
                  backgroundSize: "60px 60px",
                }}
              ></div>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6"
                >
                  <Zap className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  پروژه خورشیدی بعدی شما؟
                </h3>

                <p className="text-lg text-gray-300 mb-6">
                  آماده‌اید تا به جمع مشتریان راضی ما بپیوندید و انرژی پاک
                  خورشید را به خانه یا کسب‌وکار خود بیاورید؟
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-medium rounded-xl hover:shadow-lg transition-shadow"
                  >
                    درخواست مشاوره رایگان
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    تماس با کارشناسان
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "پشتیبانی ۲۴/۷", value: "۱۰۰٪", icon: "🛡️" },
                { label: "رضایت مشتری", value: "۹۸٪", icon: "⭐" },
                { label: "گارانتی", value: "۲۵ سال", icon: "📅" },
                { label: "بازگشت سرمایه", value: "۳-۵ سال", icon: "📈" },
              ].map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl mb-2">{fact.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {fact.value}
                  </div>
                  <div className="text-sm text-gray-600">{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gallery;
