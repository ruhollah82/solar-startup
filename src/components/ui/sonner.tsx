import { message as antdMessage } from "antd"

// Create a wrapper to maintain compatibility with existing toast calls
const message = {
  success: (content: string) => antdMessage.success(content),
  error: (content: string) => antdMessage.error(content),
  info: (content: string) => antdMessage.info(content),
  warning: (content: string) => antdMessage.warning(content),
  loading: (content: string) => antdMessage.loading(content),
}

// Legacy Toaster component for compatibility
const Toaster = () => {
  // Ant Design handles toasts globally, so we don't need a specific component
  return null;
};

export { Toaster, message }
