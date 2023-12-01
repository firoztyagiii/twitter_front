import styles from "./Button.module.css";

const Button = ({ children, kind, img, onclick }) => {
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
