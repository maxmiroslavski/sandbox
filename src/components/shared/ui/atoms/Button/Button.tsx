import styles from "./Button.module.scss";

import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }: ButtonProps, ref) => (
    <button ref={ref} className={styles.button} type="button" {...props}>
      {children}
    </button>
  )
);
