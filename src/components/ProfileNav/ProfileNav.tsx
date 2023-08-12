import { NavLink } from "react-router-dom";
import styles from "./ProfileNav.module.css";

const ProfileNav = () => {
  return (
    <div className={styles.profileNav}>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/replies">Replies</NavLink>
      <NavLink to="highlights">HighLights</NavLink>
      <NavLink to="/medias">Media</NavLink>
      <NavLink to="likes">Likes</NavLink>
    </div>
  );
};

export default ProfileNav;
