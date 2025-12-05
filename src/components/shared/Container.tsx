import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Container = ({ children, className, size = "lg" }: ContainerProps) => {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[1400px]",
  };

  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8 w-full",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
