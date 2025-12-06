import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "antd";

interface CTAButtonsProps {
  projectId: string;
  isMobile?: boolean;
  primaryText?: string;
  secondaryText?: string;
  primaryLink?: string;
  secondaryLink?: string;
  className?: string;
  delay?: number;
}

const CTAButtons = ({
  projectId,
  isMobile = false,
  primaryText = "مشاهده پروژه",
  secondaryText = "همه پروژه‌ها",
  primaryLink = `/project/${projectId}`,
  secondaryLink = "/gallery",
  className = "flex flex-col sm:flex-row gap-4",
  delay = 0.6
}: CTAButtonsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={className}
    >
      <Link to={primaryLink} className="flex-1">
        <Button
          size={isMobile ? "middle" : "large"}
          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-xl hover:shadow-orange-500/25 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold gap-2 md:gap-3 group"
        >
          <span>{primaryText}</span>
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform" />
        </Button>
      </Link>

      <Link to={secondaryLink} className="flex-1">
        <Button
          size={isMobile ? "middle" : "large"}
          variant="outlined"
          className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold gap-2 md:gap-3"
        >
          {secondaryText}
          <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </Link>
    </motion.div>
  );
};

export default CTAButtons;
