import styles from "./Modal.module.scss";

import { ReactElement, ReactNode, cloneElement, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Portal } from "../../atoms";

interface ModalProps {
  children: ReactNode;
  button?: ReactNode;
  id?: string;
}

export const Modal = ({ children, button, id }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {cloneElement(button as ReactElement, {
        onClick: () => setIsOpen(() => true),
      })}
      <AnimatePresence>
        {isOpen && (
          <Portal id={id}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.blackout}
              onClick={() => setIsOpen(() => false)}
            >
              <div className={styles.modal}>{children}</div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};
