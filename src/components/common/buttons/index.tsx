import { FC } from "react";
import styles from "./button.module.scss";
import { ButtonT } from "@/types/commonTypes";

export const Button: FC<ButtonT> = ({
  variant = "primary",
  children,
  text,
  ...restProps
}) => {
  let buttonStyle = styles.wrapper;

  if (variant === "primary") {
    buttonStyle += " " + styles.primary;
  } else if (variant === "secondary") {
    buttonStyle += " " + styles.secondary;
  } else if (variant === "disabled") {
    buttonStyle += " " + styles.disabled;
  }

  return (
    <button {...restProps} className={`${buttonStyle} ${restProps.className}`}>
      {children}
      {text}
    </button>
  );
};
