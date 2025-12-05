import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sun,
  Zap,
  ArrowUp,
  Globe,
  Shield,
  Battery,
  ChevronUp,
  Sparkles,
  Send,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "../../contexts/TranslationContext";

const Footer = () => {
  const { t } = useTranslation();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  const socialLinks = [
    { icon: Facebook, label: "فیس‌بوک", color: "hover:bg-blue-600" },
    { icon: Twitter, label: "توییتر", color: "hover:bg-cyan-500" },
    { icon: Instagram, label: "اینستاگرام", color: "hover:bg-pink-600" },
    { icon: Linkedin, label: "لینکدین", color: "hover:bg-blue-700" },
  ];

  const services = [
    { label: "نصب خورشیدی خانگی", icon: Home },
    { label: "نصب خورشیدی تجاری", icon: Building },
    { label: "بررسی و مشاوره", icon: Shield },
    { label: "نگهداری و تعمیر", icon: Settings },
    { label: "سیستم‌های ذخیره‌سازی", icon: Battery },
    { label: "نظارت هوشمند", icon: Monitor },
  ];

  const quickLinks = [
    { to: "/", label: t.nav?.home || "خانه" },
    { to: "/gallery", label: t.nav?.projects || "پروژه‌ها" },
    { to: "/about", label: t.nav?.about || "درباره ما" },
    { to: "/services", label: "خدمات" },
    { to: "/contact", label: t.nav?.contact || "تماس با ما" },
    { to: "/blog", label: "بلاگ" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+98 21 0000 0000", subtext: "پشتیبانی ۲۴/۷" },
    { icon: Mail, text: "info@solarstart.com", subtext: "ایمیل رسمی" },
    { icon: MapPin, text: "تهران، خیابان آزادی", subtext: "دفتر مرکزی" },
    { icon: Clock, text: "شنبه تا پنجشنبه ۸-۱۷", subtext: "ساعات کاری" },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:shadow-orange-500/25 hover:scale-110 transition-all duration-300"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.1) 2%, transparent 0%)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-500/20 mb-16"
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-medium">به‌روزرسانی‌ها</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                در خبرنامه انرژی پاک عضو شوید
              </h3>

              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                آخرین اخبار، فناوری‌ها و تخفیف‌های ویژه را در ایمیل خود دریافت
                کنید
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <div className="flex-1 relative">
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ایمیل خود را وارد کنید"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-14 py-4 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-xl hover:shadow-orange-500/25 px-8 py-4 gap-2"
                >
                  <Send className="h-5 w-5" />
                  عضو شوید
                </Button>
              </form>

              <p className="text-sm text-gray-400 mt-4">
                با عضویت، با{" "}
                <span className="text-orange-400">سیاست حریم خصوصی</span> ما
                موافقت می‌کنید
              </p>
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 mb-6"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 blur-lg opacity-70 rounded-2xl"
                  />
                  <div className="relative z-10 p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl">
                    <Sun className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                    SolarStart
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    انرژی پاک، آینده روشن
                  </p>
                </div>
              </motion.div>

              <p className="text-gray-400 mb-6 max-w-md">
                {t.footer?.aboutText ||
                  "پیشرو در راه‌حل‌های انرژی خورشیدی پایدار. ما با تکنولوژی روز و تیم متخصص، آینده‌ای روشن و پاک می‌سازیم."}
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 ${social.color} transition-all duration-300 group`}
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-lg font-bold mb-6 flex items-center gap-2"
              >
                <Zap className="h-5 w-5 text-orange-500" />
                {t.footer?.quickLinks || "لینک‌های سریع"}
              </motion.h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-lg font-bold mb-6 flex items-center gap-2"
              >
                <Shield className="h-5 w-5 text-green-500" />
                خدمات
              </motion.h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
                      <service.icon className="h-4 w-4 text-gray-500 group-hover:text-green-400" />
                      {service.label}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-lg font-bold mb-6 flex items-center gap-2"
              >
                <Globe className="h-5 w-5 text-blue-500" />
                {t.nav?.contact || "تماس با ما"}
              </motion.h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-gradient-to-br from-orange-500/20 to-amber-500/20 transition-all">
                      <info.icon className="h-4 w-4 text-gray-400 group-hover:text-orange-400" />
                    </div>
                    <div>
                      <div className="text-gray-300 font-medium">
                        {info.text}
                      </div>
                      <div className="text-sm text-gray-500">
                        {info.subtext}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "پروژه تکمیل شده", value: "۱۵۰+", icon: Award },
                { label: "مشتری راضی", value: "۲۵K+", icon: Users },
                { label: "ظرفیت نصب شده", value: "۵۰۰MW", icon: Battery },
                { label: "سال تجربه", value: "۱۵+", icon: Clock },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-right"
              >
                <p className="text-gray-400">
                  {t.footer?.copyright?.replace(
                    "۲۰۲۴",
                    currentYear.toString()
                  ) || `© ${currentYear} SolarStart. تمامی حقوق محفوظ است.`}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  طراحی و توسعه با ❤️ برای آینده‌ای پاک‌تر
                </p>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { label: "حریم خصوصی", href: "/privacy" },
                  { label: "شرایط استفاده", href: "/terms" },
                  { label: "سوالات متداول", href: "/faq" },
                  { label: "موقعیت‌های شغلی", href: "/careers" },
                ].map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Energy Orb */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </footer>
    </>
  );
};

// Add missing icons
const Home = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const Building = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const Settings = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const Monitor = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export default Footer;
