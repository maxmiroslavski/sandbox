import styles from "./Tooltip.module.scss";

import { ReactNode, useState, cloneElement, ReactElement, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Portal } from "../../atoms";

interface TooltipProps {
  children: ReactNode;
  button: ReactNode;
  offset?: number;
  id?: string;
}

export const Tooltip = ({
  children,
  button,
  offset = 10,
  id,
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLElement | null>(null);

  const position = buttonRef.current?.getBoundingClientRect();

  return (
    <>
      {cloneElement(button as ReactElement, {
        onMouseEnter: () => setIsOpen(() => true),
        onMouseLeave: () => setIsOpen(() => false),
        ref: buttonRef,
      })}
      <Portal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={styles.tooltip}
              style={
                position
                  ? { top: position.top, left: `${position.right + offset}px` }
                  : {}
              }
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};
