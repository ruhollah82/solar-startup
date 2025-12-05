import { Tag as AntTag, type TagProps as AntTagProps } from "antd"
import { cn } from "@/lib/utils"

interface BadgeProps extends Omit<AntTagProps, 'color'> {
  variant?: "outlined" | "solid" | "filled"
}

function Badge({
  className,
  variant = "solid",
  children,
  ...props
}: BadgeProps) {
  return (
    <AntTag
      className={cn("rounded-full px-2 py-0.5 text-xs font-medium", className)}
      {...props}
    >
      {children}
    </AntTag>
  );
}

export { Badge }
