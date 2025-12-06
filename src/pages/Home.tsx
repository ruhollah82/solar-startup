import { motion } from "framer-motion";
import HeroSlider from "../components/home/HeroSlider";
import { useProjectStore } from "../store/projectStore";
import { useTranslation } from "../contexts/TranslationContext";
import { useState, useEffect } from "react";
import {
  HomeStats,
  HomeFeatures,
  HomeProjects,
  HomeCTA,
  TestimonialPreview,
} from "../components/pages/home";

const Home = () => {
  const { getFeaturedProjects } = useProjectStore();
  const featuredProjects = getFeaturedProjects();
  const { t } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStat, setActiveStat] = useState(0);

  // Handle scroll progress for background animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / 3000, 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotate active stat
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: () => <span>⚡</span>,
      value: "۱۵۰+",
      label: t.stats?.projectsCompleted || "پروژه تکمیل شده",
      color: "from-amber-500 to-orange-500",
      description: "در سراسر جهان",
    },
    {
      icon: () => <span>🌍</span>,
      value: "۵۰۰MW+",
      label: t.stats?.totalCapacity || "ظرفیت کل نصب",
      color: "from-blue-500 to-cyan-500",
      description: "انرژی پاک تولید شده",
    },
    {
      icon: () => <span>🛡️</span>,
      value: "۲۵K+",
      label: t.stats?.happyCustomers || "مشتری راضی",
      color: "from-green-500 to-emerald-500",
      description: "با رضایت ۹۸٪",
    },
    {
      icon: () => <span>📈</span>,
      value: "۸۵%",
      label: t.stats?.efficiencyRate || "نرخ کارایی",
      color: "from-purple-500 to-pink-500",
      description: "بهینه‌ترین عملکرد",
    },
  ];

  const features = [
    {
      icon: () => <span>☀️</span>,
      title: "انرژی خورشیدی خالص",
      description: "راه‌حل‌های پایدار انرژی خورشیدی برای آینده‌ای روشن‌تر",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: () => <span>🔋</span>,
      title: "ذخیره‌سازی پیشرفته",
      description: "سیستم‌های ذخیره‌سازی باتری با تکنولوژی روز",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: () => <span>🌿</span>,
      title: "تأثیر محیطی مثبت",
      description: "کاهش ردپای کربن و حفاظت از محیط زیست",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: () => <span>👥</span>,
      title: "پشتیبانی تخصصی",
      description: "تیم متخصص با سال‌ها تجربه در صنعت انرژی خورشیدی",
      color: "from-purple-500 to-pink-500",
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
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/10 to-amber-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-green-500/10 to-emerald-500/5 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: i * 0.2,
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

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative">
          <HeroSlider />
        </section>

        <HomeStats stats={stats} />
        <HomeFeatures features={features} />
        <HomeProjects featuredProjects={featuredProjects} t={t} />
        <HomeCTA t={t} />
        <TestimonialPreview />
      </div>
    </motion.div>
  );
};

export default Home;
