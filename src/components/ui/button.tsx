import { Button as AntButton, type ButtonProps as AntButtonProps } from "antd"
import { cn } from "@/lib/utils"

// Map our variants to Ant Design types
const variantMap = {
  text: "text",
  link: "link",
  outlined: "outlined",
  dashed: "dashed",
  solid: "solid",
  filled: "filled",
} as const

const sizeMap = {
  small: "small",
  middle: "middle",
  large: "large",
} as const

interface ButtonProps extends Omit<AntButtonProps, 'type' | 'size'> {
  variant?: "text" | "link" | "outlined" | "dashed" | "solid" | "filled"
  size?: "small" | "middle" | "large"
}

function Button({
  className,
  variant = "solid",
  size = "middle",
  ...props
}: ButtonProps) {
  const antType = variantMap[variant]
  const antSize = sizeMap[size]

  return (
    <AntButton
      {...props}
      type={antType}
      size={antSize}
      className={cn(className)}
    />
  )
}

export { Button }
