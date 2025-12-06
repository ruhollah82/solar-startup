import { motion } from "framer-motion";

interface HeroTitleProps {
  title: string;
  delay?: number;
}

const HeroTitle = ({
  title,
  delay = 0.3
}: HeroTitleProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white"
    >
      {title}
    </motion.h1>
  );
};

export default HeroTitle;
