import { PropsWithChildren } from "react";

import styles from "./HomeLeft.module.css";

const HomeLeft: React.FC<PropsWithChildren> = () => {
  return (
    <div className={styles.homeLeft}>
      <div className={styles.homeLogoContainer}>
        <img className={styles.homeLogo} src="logo.png"></img>
      </div>
    </div>
  );
};

export default HomeLeft;
