import { PropsWithChildren } from "react";
import EditProfile from "../EditProfile/EditProfile";
import Tweet from "../Tweet/Tweet";
import styles from "./Profile.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Spinner from "../../UI/Spinner/Spinner";

interface Props extends PropsWithChildren {
  loading: boolean;
}

const Profile: React.FC<Props> = ({ loading }) => {
  return (
    <div className={styles.profile}>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
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
          <Tweet></Tweet>
          <Tweet></Tweet>
        </>
      )}
    </div>
  );
};

export default Profile;
