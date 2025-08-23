import React, { useState, useEffect } from "react";
import {
  useFloating,
  offset,
  shift,
  flip,
  autoUpdate,
} from "@floating-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";

export type NotificationType = "success" | "error" | "warning" | "info";

interface NotificationProps {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

const notificationIcons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

const notificationColors = {
  success: "bg-green-500",
  error: "bg-red-500",
  warning: "bg-yellow-500",
  info: "bg-blue-500",
};

export const FloatingNotification: React.FC<NotificationProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
  position = "top-right",
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const { refs, floatingStyles } = useFloating({
    placement: position.includes("top") ? "top" : "bottom",
    middleware: [offset(16), shift(), flip()],
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(id), 300);
  };

  const IconComponent = notificationIcons[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={refs.setFloating}
          style={floatingStyles}
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="z-50"
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 max-w-sm w-80">
            {/* Header */}
            <div className="flex items-center justify-between p-4 pb-2">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full ${notificationColors[type]}`}
                />
                <h4 className="font-semibold text-gray-900">{title}</h4>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="px-4 pb-4">
              <div className="flex items-start space-x-3">
                <IconComponent
                  size={20}
                  className={`mt-0.5 ${
                    type === "success"
                      ? "text-green-500"
                      : type === "error"
                      ? "text-red-500"
                      : type === "warning"
                      ? "text-yellow-500"
                      : "text-blue-500"
                  }`}
                />
                <p className="text-gray-600 text-sm leading-relaxed">
                  {message}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            {duration > 0 && (
              <div className="h-1 bg-gray-100 rounded-b-lg overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: duration / 1000, ease: "linear" }}
                  className={`h-full ${notificationColors[type]}`}
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface NotificationContainerProps {
  notifications: Array<{
    id: string;
    type: NotificationType;
    title: string;
    message: string;
    duration?: number;
  }>;
  onClose: (id: string) => void;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export const NotificationContainer: React.FC<NotificationContainerProps> = ({
  notifications,
  onClose,
  position = "top-right",
}) => {
  const getPositionClasses = (pos: string) => {
    switch (pos) {
      case "top-right":
        return "top-4 right-4";
      case "top-left":
        return "top-4 left-4";
      case "bottom-right":
        return "bottom-4 right-4";
      case "bottom-left":
        return "bottom-4 left-4";
      default:
        return "top-4 right-4";
    }
  };

  return (
    <div className={`fixed ${getPositionClasses(position)} z-50 space-y-4`}>
      {notifications.map((notification) => (
        <FloatingNotification
          key={notification.id}
          {...notification}
          onClose={onClose}
          position={position}
        />
      ))}
    </div>
  );
};

// Hook for managing notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useState<
    Array<{
      id: string;
      type: NotificationType;
      title: string;
      message: string;
      duration?: number;
    }>
  >([]);

  const addNotification = (
    type: NotificationType,
    title: string,
    message: string,
    duration?: number
  ) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { id, type, title, message, duration };

    setNotifications((prev) => [...prev, newNotification]);

    return id;
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
  };
};
