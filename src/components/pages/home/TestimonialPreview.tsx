import { motion } from "framer-motion";

const TestimonialPreview = () => {
  return (
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
  );
};

export default TestimonialPreview;
