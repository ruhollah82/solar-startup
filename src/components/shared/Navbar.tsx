import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Zap,
  ChevronDown,
  Phone,
  Calendar,
  Sparkles,
  Shield,
  Globe,
} from "lucide-react";
// import { Button } from "../ui/button";
import { useTranslation } from "../../contexts/TranslationContext";
import { Button } from "antd";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { t } = useTranslation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navItems = [
    {
      to: "/",
      label: t.nav.home,
      icon: Sun,
    },
    {
      to: "/gallery",
      label: t.nav.projects,
      icon: Zap,
    },
    {
      to: "/services",
      label: "خدمات",
      icon: Shield,
      dropdown: [
        { label: "نصب خانگی", to: "/services/residential" },
        { label: "نصب صنعتی", to: "/services/commercial" },
        { label: "بررسی فنی", to: "/services/inspection" },
        { label: "نگهداری", to: "/services/maintenance" },
      ],
    },
    {
      to: "/about",
      label: t.nav.about,
      icon: Globe,
    },
    {
      to: "/contact",
      label: t.nav.contact,
      icon: Phone,
    },
  ];

  const stats = [
    { label: "پروژه‌ها", value: "۱۵۰+" },
    { label: "مشتریان", value: "۲۵K+" },
    { label: "تجربه", value: "۱۵ سال" },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/50"
            : "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/30"
        }`}
        dir="rtl"
      >
        {/* Top Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hidden lg:block"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-6 text-sm">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <Sparkles className="h-3 w-3" />
                    <span className="font-medium">{stat.value}</span>
                    <span className="opacity-90">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm">
                <motion.a
                  href="tel:+982100000000"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="h-3 w-3" />
                  <span>۰۲۱-۰۰۰۰۰۰</span>
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 px-3 py-1 rounded-full text-xs"
                >
                  ۲۴/۷ پشتیبانی
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.div
            className="flex justify-between items-center h-16 lg:h-20"
            initial="hidden"
            animate="visible"
          >
            {/* Logo */}
            <motion.div
              variants={navItemVariants}
              transition={{ delay: 0, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <Link to="/" className="flex items-center gap-3">
                <motion.div
                  className="relative"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 blur-lg opacity-70" />
                  <Sun className="h-10 w-10 text-white relative z-10" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent leading-tight">
                    SolarStart
                  </span>
                  <span className="text-xs text-gray-500">
                    انرژی پاک، آینده روشن
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              className="hidden lg:flex items-center gap-1"
              variants={navItemVariants}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-orange-600 transition-colors duration-200 group"
                  >
                    <item.icon className="h-4 w-4 text-orange-500 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}

                    {/* Active Indicator */}
                    {location.pathname === item.to && (
                      <motion.div
                        className="absolute bottom-0 right-1/2 translate-x-1/2 w-8 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                        layoutId="activeIndicator"
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <motion.div
                              key={subItem.to}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.1 }}
                            >
                              <Link
                                to={subItem.to}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-l from-orange-50 to-amber-50 transition-all group"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full group-hover:scale-150 transition-transform" />
                                <span className="text-gray-700 group-hover:text-orange-600 font-medium">
                                  {subItem.label}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Desktop CTA */}
            <motion.div
              className="hidden lg:flex items-center gap-4"
              variants={navItemVariants}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-orange-600 font-medium"
                >
                  پرسش و پاسخ
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-xl hover:shadow-orange-500/25 px-8 py-3 gap-2"
                  onClick={() => window.open("/quote", "_blank")}
                >
                  <Calendar className="h-4 w-4" />
                  {t.nav.getQuote}
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors relative"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              variants={navItemVariants}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </motion.div>

              {/* Mobile Button Indicator */}
              {isOpen && (
                <motion.div
                  className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                />
              )}
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Sun className="h-8 w-8 text-orange-500" />
                    </motion.div>
                    <div>
                      <div className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                        SolarStart
                      </div>
                      <div className="text-xs text-gray-500">
                        انرژی پاک، آینده روشن
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-3 text-center"
                    >
                      <div className="text-lg font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-lg py-4 text-lg gap-3"
                    onClick={() => {
                      window.open("/quote", "_blank");
                      setIsOpen(false);
                    }}
                  >
                    <Calendar className="h-5 w-5" />
                    {t.nav.getQuote}
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Menu Items */}
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <div className="mb-2">
                      <Link
                        to={item.to}
                        className={`flex items-center gap-3 px-4 py-4 rounded-xl transition-all ${
                          location.pathname === item.to
                            ? "bg-gradient-to-l from-orange-500/10 to-amber-500/10 border-r-4 border-orange-500"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon
                          className={`h-5 w-5 ${
                            location.pathname === item.to
                              ? "text-orange-500"
                              : "text-gray-500"
                          }`}
                        />
                        <span
                          className={`font-medium ${
                            location.pathname === item.to
                              ? "text-orange-600"
                              : "text-gray-700"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>

                      {/* Dropdown Items */}
                      {item.dropdown && (
                        <div className="mr-8 mt-1 space-y-1">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subItem.to}
                              to={subItem.to}
                              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-6 border-t border-gray-200 mt-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-lg">
                      <Phone className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">پشتیبانی ۲۴/۷</div>
                      <a
                        href="tel:+982100000000"
                        className="text-lg font-bold text-gray-900"
                      >
                        ۰۲۱-۰۰۰۰۰۰
                      </a>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center">
                    انرژی پاک برای آینده‌ای روشن‌تر
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
