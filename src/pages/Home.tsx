import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Globe, TrendingUp } from "lucide-react";
import HeroSlider from "../components/home/HeroSlider";
import ProjectCard from "../components/home/ProjectCard";
import { useProjectStore } from "../store/projectStore";
import { Button } from "../components/ui/button";
import { useTranslation } from "../contexts/TranslationContext";

const Home = () => {
  const { getFeaturedProjects } = useProjectStore();
  const featuredProjects = getFeaturedProjects();
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-20"
    >
      {/* Hero Section */}
      <section>
        <HeroSlider />
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Zap, value: "۱۵۰+", label: t.stats.projectsCompleted },
            { icon: Globe, value: "۵۰۰MW+", label: t.stats.totalCapacity },
            { icon: Shield, value: "۲۵K+", label: t.stats.happyCustomers },
            { icon: TrendingUp, value: "۸۵%", label: t.stats.efficiencyRate },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <stat.icon className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-800 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              {t.featuredProjects.title}
            </h2>
            <p className="text-slate-600">
              {t.featuredProjects.subtitle}
            </p>
          </div>
          <Link to="/gallery">
            <Button className="gap-2">
              {t.featuredProjects.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.cta.title}
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="large"
              className="bg-white text-emerald-600 hover:bg-emerald-50"
            >
              {t.cta.getConsultation}
            </Button>
            <Button
              size="large"
              variant="outlined"
              className="border-white text-white"
            >
              {t.cta.viewCaseStudies}
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
