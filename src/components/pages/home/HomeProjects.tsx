import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "antd";
import ProjectCard from "../../home/ProjectCard";

interface HomeProjectsProps {
  featuredProjects: any[];
  t: any;
}

const HomeProjects = ({ featuredProjects, t }: HomeProjectsProps) => {
  return (
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
  );
};

export default HomeProjects;
