import { PropsWithChildren } from "react";
import logo from "/logo.png";
import styles from "./HomeLeft.module.css";
import { Link } from "react-router-dom";

const HomeLeft = () => {
  return (
    <div className={styles.homeLeft}>
      <div className={styles.homeLogoContainer}>
        <Link to="/web">
          <img className={styles.homeLogo} src={logo}></img>
        </Link>
      </div>
    </div>
  );
};

export default HomeLeft;
