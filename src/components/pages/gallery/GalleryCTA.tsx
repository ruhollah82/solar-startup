import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const GalleryCTA = () => {
  return (
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
  );
};

export default GalleryCTA;
