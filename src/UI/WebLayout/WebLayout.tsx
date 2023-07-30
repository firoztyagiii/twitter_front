import { PropsWithChildren } from "react";
import styles from "./WebLayout.module.css";

const WebLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.web}>{children}</main>;
};

export default WebLayout;
