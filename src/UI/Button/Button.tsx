import { PropsWithChildren } from "react";

import styles from "./Button.module.css";

interface Props {
  kind: string;
  img?: string;
}

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  kind,
  img,
}) => {
  if (kind === "primary") {
    return <button className={styles.primaryBtn}>{children}</button>;
  }
  if (kind === "login") {
    return (
      <button className={styles.loginBtn}>
        <img className={styles.buttonLogo} src={img}></img>
        <span>{children}</span>
      </button>
    );
  }
  return null;
};

export default Button;
