import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Menu = () => {
  const user = useSelector((state: RootState) => state.user);

  const [showLogout, setShowLogout] = useState(false);
  const menuClickHandler = () => {
    setShowLogout(true);
  };

  return (
    <div className={styles.menu}>
      <ul className={styles.menuItems}>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return `${styles.menuItem} ${styles.menuActive}`;
              } else {
                return `${styles.menuItem}`;
              }
            }}
            to="/web"
          >
            <img className={styles.menuLogo} src="logo.png"></img>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return `${styles.menuItem} ${styles.menuActive}`;
              } else {
                return `${styles.menuItem}`;
              }
            }}
            to="/web"
          >
            <AiOutlineHome></AiOutlineHome>
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return `${styles.menuItem} ${styles.menuActive}`;
              } else {
                return `${styles.menuItem}`;
              }
            }}
            to="/explore"
          >
            <AiOutlineSearch></AiOutlineSearch>
            <p>Explore</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return `${styles.menuItem} ${styles.menuActive}`;
              } else {
                return `${styles.menuItem}`;
              }
            }}
            to="/notification"
          >
            <AiOutlineNotification></AiOutlineNotification>
            <p>Notification</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return `${styles.menuItem} ${styles.menuActive}`;
              } else {
                return `${styles.menuItem}`;
              }
            }}
            to="/profile"
          >
            <AiOutlineUser></AiOutlineUser>
            <p>Profile</p>
          </NavLink>
        </li>

        <Button kind="primary">Tweet</Button>
      </ul>
      <div onClick={menuClickHandler} className={styles.menuProfile}>
        {showLogout && (
          <div className={styles.menuProfileLogout}>
            <ul>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                <Link to="/logout">Add Account</Link>
              </li>
            </ul>
          </div>
        )}
        <div className={styles.menuProfileContainer}>
          <img
            className={styles.menuProfileContainerLogo}
            src="https://i.pinimg.com/474x/97/2d/b9/972db94857b30b37d4de10e7e5da5ff4.jpg"
          ></img>
        </div>
        <div className={styles.menuProfileDetails}>
          <p className={styles.menuProfileName}>{user.user.name}</p>
          <p
            className={styles.menuProfileUserName}
          >{`@${user.user.username}`}</p>
        </div>
        <div className={styles.menuProfileMore}>
          <AiOutlineMore></AiOutlineMore>
        </div>
      </div>
    </div>
  );
};
export default Menu;
