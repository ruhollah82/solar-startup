import { motion } from "framer-motion";

interface HeroDescriptionProps {
  description: string;
  delay?: number;
}

const HeroDescription = ({
  description,
  delay = 0.5
}: HeroDescriptionProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-base md:text-xl text-gray-200 mb-6 md:mb-10 leading-relaxed max-w-2xl"
    >
      {description}
    </motion.p>
  );
};

export default HeroDescription;
