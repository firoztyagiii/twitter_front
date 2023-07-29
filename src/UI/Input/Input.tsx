import { PropsWithChildren } from "react";

import styles from "./Input.module.css";

interface Props {
  placeholder: string;
  type: string;
}

const Input: React.FC<PropsWithChildren<Props>> = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
    ></input>
  );
};

export default Input;
