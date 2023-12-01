import styles from "./Settings.module.css";

const SettingsLayout = ({ children }) => {
  return <main className={styles.settingsLayout}>{children}</main>;
};

export default SettingsLayout;
