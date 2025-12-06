import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface HomeStatsProps {
  stats: Array<{
    icon: any;
    value: string;
    label: string;
    color: string;
    description: string;
  }>;
}

const HomeStats = ({ stats }: HomeStatsProps) => {
  const [activeStat, setActiveStat] = useState(0);

  // Rotate active stat
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-200 mb-4">
            <span className="text-orange-500">✨</span>
            <span className="text-sm font-medium text-orange-700">
              دستاوردهای درخشان
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ما در اعداد صحبت می‌کنیم
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            سال‌ها تجربه و صدها پروژه موفق، گواه تعهد ما به کیفیت و نوآوری
            است
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className={`relative bg-gradient-to-br ${stat.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group`}
            >
              {/* Active State Indicator */}
              <AnimatePresence>
                {activeStat === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full"
                  >
                    #{index + 1}
                  </motion.span>
                </div>

                <motion.div
                  key={stat.value}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>

                <div className="text-lg font-medium mb-2">{stat.label}</div>
                <div className="text-sm opacity-90">{stat.description}</div>

                {/* Animated Progress Line */}
                <motion.div
                  className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden mt-6"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                >
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${70 + index * 10}%` }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                  />
                </motion.div>
              </div>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Animated Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-600 bg-gray-100 px-6 py-3 rounded-full">
            <Clock className="h-4 w-4" />
            <span className="text-sm">
              بیش از <span className="font-bold text-gray-900">۱۵</span> سال
              تجربه در صنعت انرژی خورشیدی
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeStats;
