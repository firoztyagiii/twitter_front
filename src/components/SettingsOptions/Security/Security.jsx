import styles from "./Security.module.css";

const Security = () => {
  return (
    <div className={styles.security}>
      <h2 className={styles.securityHeading}>Security</h2>
      <p className={styles.securityPara}>Manage your accounts security.</p>
      <div className={styles.securityLinks}>
        <div className={styles.securityLink}>
          <p>Turn on 2FA</p>
          <input className={styles.securityCheckbox} type="checkbox"></input>
        </div>
      </div>
    </div>
  );
};

export default Security;
