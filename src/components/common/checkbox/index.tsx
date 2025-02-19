"use client";
import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";
import styles from "./checkbox.module.scss";

type CheckboxT = {
  label?: string | ReactNode;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Checkbox: FC<CheckboxT> = ({ label, ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles.wrapper}>
      <label className="max-w-[276px] flex flex-row gap-[12px] items-center justify-start">
        <input
          {...rest}
          type="checkbox"
          className={isChecked ? styles.checked : ""}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        {typeof label === "string" ? (
          <span className="text-sm text-[#808080]">{label}</span>
        ) : (
          label
        )}
      </label>
    </div>
  );
};

export default Checkbox;
