import EditProfile from "../EditProfile/EditProfile";
import styles from "./Profile.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileNav}>
        <div className={styles.profileNavBackBtn}>
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
          <div className={styles.profileNavUserDetail}>
            <p className={styles.profileNavUserName}>djskfhjkdsg</p>
            <p className={styles.profileNavUserTweet}>2 Tweets</p>
          </div>
        </div>
        <div className={styles.profileNavDetial}></div>
      </div>
      <EditProfile></EditProfile>
    </div>
  );
};

export default Profile;
