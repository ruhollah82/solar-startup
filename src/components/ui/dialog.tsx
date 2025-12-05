import * as React from "react"
import { Modal as AntModal, type ModalProps as AntModalProps } from "antd"

interface DialogProps extends Omit<AntModalProps, 'open'> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function Dialog({ open, onOpenChange, children, ...props }: DialogProps) {
  return (
    <AntModal
      open={open}
      onCancel={() => onOpenChange?.(false)}
      footer={null}
      destroyOnClose
      {...props}
    >
      {children}
    </AntModal>
  )
}

function DialogTrigger({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return React.cloneElement(children as React.ReactElement, {
    onClick: (e: React.MouseEvent) => {
      onClick?.();
      (children as React.ReactElement).props?.onClick?.(e);
    }
  });
}

function DialogContent({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`flex flex-col gap-2 text-center sm:text-left mb-4 ${className || ''}`}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`flex flex-col-reverse gap-2 sm:flex-row sm:justify-end mt-6 ${className || ''}`}
      {...props}
    />
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`text-lg leading-none font-semibold ${className || ''}`}
      {...props}
    />
  )
}

function DialogDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`text-sm text-gray-600 ${className || ''}`}
      {...props}
    />
  )
}

// Legacy exports for compatibility
function DialogClose({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return React.cloneElement(children as React.ReactElement, {
    onClick: (e: React.MouseEvent) => {
      onClick?.();
      (children as React.ReactElement).props?.onClick?.(e);
    }
  });
}

function DialogOverlay() {
  // Not needed with Ant Design Modal
  return null;
}

function DialogPortal() {
  // Not needed with Ant Design Modal
  return null;
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
