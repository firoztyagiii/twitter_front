import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import Button from "../../UI/Button/Button";

const USER = {
  name: "Firoz Tyagi",
  username: "firoztaygi_19",
  img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Photo_portrait_PP.jpg",
};

const Menu = () => {
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
      <div className={styles.menuProfile}>
        <div className={styles.menuProfileContainer}>
          <img className={styles.menuProfileContainerLogo} src={USER.img}></img>
        </div>
        <div className={styles.menuProfileDetails}>
          <p className={styles.menuProfileName}>{USER.name}</p>
          <p className={styles.menuProfileUserName}>{`@${USER.username}`}</p>
        </div>
        <div className={styles.menuProfileMore}>
          <AiOutlineMore></AiOutlineMore>
        </div>
      </div>
    </div>
  );
};
export default Menu;
