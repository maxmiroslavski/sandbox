import styles from "./Tooltip.module.scss";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

interface ToolTipProps {
  children: ReactNode;
  position?: DOMRect;
}

export const Tooltip = ({ children, position }: ToolTipProps) =>
  createPortal(
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className={styles.tooltip}
      style={
        position ? { top: position.top, left: `${position.left + 85}px` } : {}
      }
    >
      {children}
    </motion.div>,
    document.getElementById("tooltip-root")!
  );
