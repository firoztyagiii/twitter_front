import { PropsWithChildren } from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.homeFooter}>
      <ul className={styles.list}>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Help Center</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Status</a>
        </li>
        <li>
          <a>Login</a>
        </li>
        <li>
          <a>SignUp</a>
        </li>
        <li>
          <a>Business</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
