import styles from "./Modal.module.scss";

import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export const Modal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) =>
  createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className={styles.blackout}
    >
      <div className={styles.modal}>{children}</div>
    </motion.div>,
    document.getElementById("modal-root")!
  );
