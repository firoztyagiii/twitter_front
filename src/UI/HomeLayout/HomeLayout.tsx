import { PropsWithChildren } from "react";

import styles from "./HomeLayout.module.css";

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.homeContainer}>{children}</main>;
};

export default HomeLayout;
