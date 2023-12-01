import { NavLink } from "react-router-dom";
import styles from "./Settings.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const SettingsLink = () => {
  return (
    <div className={styles.setting}>
      <h2 className={styles.heading}>Settings</h2>
      <ul className={styles.settingNav}>
        <li className={styles.settingNavLink}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "linkActive" : "";
            }}
            to="account"
          >
            <p>Your Account</p>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </NavLink>
        </li>
        <li className={styles.settingNavLink}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "linkActive" : "";
            }}
            to="security"
          >
            <p>Security</p>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </NavLink>
        </li>
        <li className={styles.settingNavLink}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "linkActive" : "";
            }}
            to="privacy"
          >
            <p>Privacy</p>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </NavLink>
        </li>
        <li className={styles.settingNavLink}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "linkActive" : "";
            }}
            to="notification"
          >
            <p>Notification</p>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </NavLink>
        </li>
        <li className={styles.settingNavLink}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "linkActive" : "";
            }}
            to="resources"
          >
            <p>Resources</p>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SettingsLink;
