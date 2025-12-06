import { motion } from "framer-motion";

const QuickFactsFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white border-t border-gray-200 py-8"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Project Duration", value: "6 Months" },
            { label: "Solar Panels", value: "1,200 Units" },
            { label: "Investment", value: "$2.5M" },
            { label: "ROI Period", value: "5 Years" },
          ].map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {fact.value}
              </div>
              <div className="text-sm text-gray-600">{fact.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default QuickFactsFooter;
