import { motion } from "framer-motion";
import { Star, PlayCircle } from "lucide-react";
import { Button } from "antd";

interface HomeCTAProps {
  t: any;
}

const HomeCTA = ({ t }: HomeCTAProps) => {
  return (
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
                <span className="text-orange-200/30">⚡</span>
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
  );
};

export default HomeCTA;
