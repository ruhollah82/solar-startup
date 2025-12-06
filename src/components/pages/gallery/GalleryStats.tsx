import { motion } from "framer-motion";
import { Grid3x3, Zap, Leaf, Home } from "lucide-react";
import { useState, useEffect } from "react";

const GalleryStats = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(false);

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
  );
};

export default GalleryStats;
