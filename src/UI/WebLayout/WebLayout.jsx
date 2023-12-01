import styles from "./WebLayout.module.css";

const WebLayout = ({ children }) => {
  return <main className={styles.web}>{children}</main>;
};

export default WebLayout;
