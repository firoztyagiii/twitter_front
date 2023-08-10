import styles from "./EditProfile.module.css";
import { AiOutlineCalendar } from "react-icons/ai";

const EditProfile = () => {
  return (
    <div className={styles.editProfile}>
      <div className={styles.editProfileBannerContainer}>
        <img
          className={styles.editProfileImg}
          src="https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-anime-pfp-02.jpg"
        ></img>
        <img className={styles.editProfileBannerImg} src=""></img>
      </div>
      <div className={styles.editProfileImgBtn}>
        <div></div>
        <button className="secondaryBtn">Edit Profile</button>
      </div>
      <div className={styles.editProfileDetails}>
        <p className={styles.editProfileName}>Firoz Tyagi</p>
        <p className={styles.editProfileUserName}>@firoz_tyagi18</p>
        <div className={styles.editProfileDate}>
          <AiOutlineCalendar></AiOutlineCalendar>
          <p className={styles.editProfileDateTime}>18 October 2018</p>
        </div>
        <div className={styles.editProfileFollow}>
          <a>
            <span>86</span> Following
          </a>
          <a>
            <span>11</span> Followers
          </a>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
