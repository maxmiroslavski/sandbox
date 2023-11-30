import styles from "./Dropdown.module.scss";

import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface DropdownProps {
  children: ReactNode;
  position?: DOMRect;
}

export const Dropdown = ({ children, position }: DropdownProps) =>
  createPortal(
    <motion.div
      initial={{ opacity: 0, y: -30, zIndex: -1 }}
      animate={{ opacity: 1, y: 0, zIndex: 1 }}
      exit={{ opacity: 0, y: -20, zIndex: -1 }}
      className={styles.dropdown}
      style={
        position ? { top: `${position.top + 40}px`, left: position.left } : {}
      }
    >
      {children}
    </motion.div>,
    document.getElementById("dropdown-root")!
  );
