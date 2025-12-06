import { motion } from "framer-motion";

interface SlideBackgroundProps {
  imageUrl: string;
  className?: string;
}

const SlideBackground = ({
  imageUrl,
  className = "absolute inset-0 bg-cover bg-center"
}: SlideBackgroundProps) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SlideBackground;
