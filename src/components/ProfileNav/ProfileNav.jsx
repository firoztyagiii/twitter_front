import { NavLink } from "react-router-dom";
import styles from "./ProfileNav.module.css";

const ProfileNav = () => {
  return (
    <div className={styles.profileNav}>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "activeNavLink" : "";
        }}
        to="posts"
      >
        Posts
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "activeNavLink" : "";
        }}
        to="replies"
      >
        Replies
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "activeNavLink" : "";
        }}
        to="media"
      >
        Media
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "activeNavLink" : "";
        }}
        to="likes"
      >
        Likes
      </NavLink>
    </div>
  );
};

export default ProfileNav;
