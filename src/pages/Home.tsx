import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Sparkles,
  Sun,
  Battery,
  Leaf,
  Users,
  Clock,
  MapPin,
  ChevronRight,
  PlayCircle,
  Award,
  Star,
} from "lucide-react";
import HeroSlider from "../components/home/HeroSlider";
import ProjectCard from "../components/home/ProjectCard";
import { useProjectStore } from "../store/projectStore";
import { useTranslation } from "../contexts/TranslationContext";
import { useState, useEffect } from "react";
import { Button } from "antd";

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
      icon: Zap,
      value: "۱۵۰+",
      label: t.stats?.projectsCompleted || "پروژه تکمیل شده",
      color: "from-amber-500 to-orange-500",
      description: "در سراسر جهان",
    },
    {
      icon: Globe,
      value: "۵۰۰MW+",
      label: t.stats?.totalCapacity || "ظرفیت کل نصب",
      color: "from-blue-500 to-cyan-500",
      description: "انرژی پاک تولید شده",
    },
    {
      icon: Shield,
      value: "۲۵K+",
      label: t.stats?.happyCustomers || "مشتری راضی",
      color: "from-green-500 to-emerald-500",
      description: "با رضایت ۹۸٪",
    },
    {
      icon: TrendingUp,
      value: "۸۵%",
      label: t.stats?.efficiencyRate || "نرخ کارایی",
      color: "from-purple-500 to-pink-500",
      description: "بهینه‌ترین عملکرد",
    },
  ];

  const features = [
    {
      icon: Sun,
      title: "انرژی خورشیدی خالص",
      description: "راه‌حل‌های پایدار انرژی خورشیدی برای آینده‌ای روشن‌تر",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Battery,
      title: "ذخیره‌سازی پیشرفته",
      description: "سیستم‌های ذخیره‌سازی باتری با تکنولوژی روز",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Leaf,
      title: "تأثیر محیطی مثبت",
      description: "کاهش ردپای کربن و حفاظت از محیط زیست",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
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

          {/* Floating CTA
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 right-1/2 translate-x-1/2 z-20 hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg">محاسبه رایگان</h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                محاسبه هزینه و بازگشت سرمایه پروژه خورشیدی شما
              </p>
              <Button className="w-full bg-gradient-to-r from-white to-gray-100 text-gray-900 hover:shadow-lg">
                شروع محاسبه
                <ArrowRight className="h-4 w-4 mr-2" />
              </Button>
            </div>
          </motion.div> */}
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-200 mb-4">
                <Sparkles className="h-4 w-4 text-orange-500" />
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

        {/* Features Section */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                چرا انرژی خورشیدی؟
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                مزایای بی‌نظیر استفاده از انرژی پاک خورشیدی برای خانه و کسب‌وکار
                شما
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-3xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`mb-6 p-4 bg-gradient-to-br ${feature.color} rounded-2xl w-fit`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{feature.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">بیشتر بدانید</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </motion.div>
                  </div>

                  {/* Hover Line */}
                  <motion.div
                    className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 mt-4"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-200 mb-4">
                  <Award className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium text-orange-700">
                    پروژه‌های منتخب
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {t.featuredProjects?.title || "پروژه‌های برجسته"}
                </h2>
                <p className="text-gray-600 text-lg">
                  {t.featuredProjects?.subtitle ||
                    "نمونه‌ای از موفق‌ترین پروژه‌های اجرا شده توسط تیم ما"}
                </p>
              </div>

              <Link to="/gallery">
                <Button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg px-6 py-3 gap-2">
                  {t.featuredProjects?.viewAll || "مشاهده همه پروژه‌ها"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>

            {/* View More */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
              >
                <span>مشاهده تمام پروژه‌ها</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden relative"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 40px 40px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
                    backgroundSize: "80px 80px",
                  }}
                ></div>
              </div>

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
                      right: `${10 + i * 10}%`,
                      top: `${20 + i * 5}%`,
                    }}
                  >
                    <Zap className="h-6 w-6 text-orange-200/30" />
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="max-w-3xl mx-auto text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6"
                  >
                    <Star className="h-8 w-8 text-white" />
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t.cta?.title || "آماده‌اید شروع کنید؟"}
                  </h2>

                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    {t.cta?.subtitle ||
                      "با تیم متخصص ما مشورت کنید و بهترین راه‌حل انرژی خورشیدی را برای نیازهای خود پیدا کنید"}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="large"
                      className="bg-gradient-to-r from-white to-gray-100 text-gray-900 hover:shadow-xl px-8 py-4 text-lg"
                    >
                      {t.cta?.getConsultation || "درخواست مشاوره رایگان"}
                      <PlayCircle className="h-5 w-5 mr-2" />
                    </Button>
                    <Button
                      size="large"
                      variant="outlined"
                      className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                    >
                      {t.cta?.viewCaseStudies || "مشاهده نمونه کارها"}
                    </Button>
                  </div>

                  {/* Quick Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        ۲۴/۷
                      </div>
                      <div className="text-sm text-gray-300">
                        پشتیبانی آنلاین
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        ۲۵ سال
                      </div>
                      <div className="text-sm text-gray-300">گارانتی کیفیت</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        رایگان
                      </div>
                      <div className="text-sm text-gray-300">مشاوره اولیه</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Preview */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    نظر مشتریان ما
                  </h3>
                  <p className="text-gray-600 mb-6">
                    "نصب سیستم خورشیدی بهترین تصمیم مالی سال گذشته ما بود. در
                    عرض ۳ سال هزینه‌ها بازگشت و حالا برق رایگان داریم!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full"></div>
                    <div>
                      <div className="font-bold text-gray-900">علی رضایی</div>
                      <div className="text-sm text-gray-500">
                        مدیر عامل شرکت آرمان
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "رضایت مشتری", value: "۹۸٪" },
                      { label: "پروژه موفق", value: "۹۹٪" },
                      { label: "تحویل به موقع", value: "۹۷٪" },
                      { label: "پشتیبانی عالی", value: "۹۶٪" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-2xl p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {item.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Home;
