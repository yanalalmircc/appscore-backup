"use client";

import { ButtonProps } from "@app/types";
import styles from "./Buttons.module.css";

export const Buttons = ({
  variant = "primary",
  children,
  onClick,
  scrollToId,
  className = "",
  icon,
  disabled,
}: ButtonProps) => {
  const handleClick = () => {
    if (scrollToId) {
      document
        .getElementById(scrollToId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };
  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
      {icon}
    </button>
  );
};
