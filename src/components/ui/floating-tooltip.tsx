import React, { useState } from "react";
import { useFloating, offset, shift, flip, arrow } from "@floating-ui/react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingTooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  delay?: number;
  className?: string;
}

export const FloatingTooltip: React.FC<FloatingTooltipProps> = ({
  content,
  children,
  placement = "top",
  delay = 300,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = React.useRef<HTMLDivElement>(null);

  const { refs, floatingStyles } = useFloating({
    placement,
    middleware: [offset(8), shift(), flip(), arrow({ element: arrowRef })],
  });

  const handleMouseEnter = () => {
    const timer = setTimeout(() => setIsOpen(true), delay);
    return () => clearTimeout(timer);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      ref={refs.setReference}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className={`z-50 ${className}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm shadow-lg max-w-xs"
            >
              {content}
              <div
                ref={arrowRef}
                className="absolute w-2 h-2 bg-gray-900 transform rotate-45"
                style={{
                  left: placement.includes("left")
                    ? "100%"
                    : placement.includes("right")
                    ? "0%"
                    : "50%",
                  top: placement.includes("top")
                    ? "100%"
                    : placement.includes("bottom")
                    ? "0%"
                    : "50%",
                  transform: `translate(${
                    placement.includes("left")
                      ? "-50%"
                      : placement.includes("right")
                      ? "50%"
                      : "-50%"
                  }, ${
                    placement.includes("top")
                      ? "-50%"
                      : placement.includes("bottom")
                      ? "50%"
                      : "-50%"
                  }) rotate(45deg)`,
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
