import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface HomeFeaturesProps {
  features: Array<{
    icon: any;
    title: string;
    description: string;
    color: string;
  }>;
}

const HomeFeatures = ({ features }: HomeFeaturesProps) => {
  return (
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
  );
};

export default HomeFeatures;
