import styles from "./Dropdown.module.scss";

import { ReactElement, ReactNode, cloneElement, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Portal } from "../../atoms";

interface DropdownProps {
  children: ReactNode;
  button?: ReactNode;
  offset?: number;
  id?: string;
}

export const Dropdown = ({
  children,
  button,
  offset = 40,
  id,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const position = buttonRef.current?.getBoundingClientRect();

  return (
    <>
      {cloneElement(button as ReactElement, {
        onClick: () => setIsOpen((prev) => !prev),
        ref: buttonRef,
      })}
      <Portal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30, zIndex: -1 }}
              animate={{ opacity: 1, y: 0, zIndex: 1 }}
              exit={{ opacity: 0, y: -20, zIndex: -1 }}
              className={styles.dropdown}
              style={
                position
                  ? { top: `${position.top + offset}px`, left: position.left }
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
