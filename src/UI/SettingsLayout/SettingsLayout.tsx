import { PropsWithChildren } from "react";
import styles from "./Settings.module.css";

const SettingsLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.settingsLayout}>{children}</main>;
};

export default SettingsLayout;
