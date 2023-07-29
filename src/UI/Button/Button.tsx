import { PropsWithChildren } from "react";

import styles from "./Button.module.css";

interface Props {
  kind: string;
  img?: string;
  onclick?: () => void;
}

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  kind,
  img,
  onclick,
}) => {
  if (kind === "primary") {
    return (
      <button onClick={onclick} className={styles.primaryBtn}>
        {children}
      </button>
    );
  }
  if (kind === "login") {
    return (
      <button onClick={onclick} className={styles.loginBtn}>
        <img className={styles.buttonLogo} src={img}></img>
        <span>{children}</span>
      </button>
    );
  }

  if (kind === "secondary") {
    return (
      <button onClick={onclick} className={styles.secondaryBtn}>
        <span>{children}</span>
      </button>
    );
  }
  return null;
};

export default Button;
