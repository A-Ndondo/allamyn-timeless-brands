import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

interface EnhancedButtonProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
  showSuccessAlert?: boolean;
  successMessage?: string;
  className?: string;
  disabled?: boolean;
  asChild?: boolean;
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  onClick,
  showSuccessAlert = false,
  successMessage = "Action completed successfully!",
  className = "",
  disabled = false,
  asChild = false,
  ...props
}) => {
  const handleClick = async () => {
    if (onClick) {
      onClick();
    }

    if (showSuccessAlert) {
      await Swal.fire({
        icon: "success",
        title: "Success!",
        text: successMessage,
        timer: 2000,
        timerProgressBar: true,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
    }
  };

  const buttonProps = {
    variant,
    size,
    onClick: handleClick,
    disabled,
    className,
    ...props,
  };

  if (asChild) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Button {...buttonProps}>{children}</Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Button {...buttonProps}>{children}</Button>
    </motion.div>
  );
};
