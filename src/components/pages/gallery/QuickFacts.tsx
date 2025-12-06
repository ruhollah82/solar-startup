import { motion } from "framer-motion";

const QuickFacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "پشتیبانی ۲۴/۷", value: "۱۰۰٪", icon: "🛡️" },
            { label: "رضایت مشتری", value: "۹۸٪", icon: "⭐" },
            { label: "گارانتی", value: "۲۵ سال", icon: "📅" },
            { label: "بازگشت سرمایه", value: "۳-۵ سال", icon: "📈" },
          ].map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl mb-2">{fact.icon}</div>
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

export default QuickFacts;
