import React from "react";
import styles from "./input.module.css";
const CustomInput = ({ options, value, onChange, error }) => {
  return (
    <label className={styles.label}>
      <input
        className={error ? styles["input-error"] : styles.input}
        placeholder={options.label}
        type={options.type}
        required={options.required}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
};

export default CustomInput;
