import { PropsWithChildren, SyntheticEvent } from "react";
import ProfileNav from "../ProfileNav/ProfileNav";
import styles from "./EditProfile.module.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { useParams } from "react-router-dom";

interface Props extends PropsWithChildren {
  err: Error;
  user: IUser.UserDocuemnt;
}

const EditProfile: React.FC<Props> = ({ err, user }) => {
  const { userParam } = useParams();
  const imageLoadHandler = (e: SyntheticEvent) => {
    console.log("loadng");
  };

  return (
    <div className={styles.editProfile}>
      <div className={styles.editProfileBannerContainer}>
        <img
          onLoadCapture={imageLoadHandler}
          loading="lazy"
          className={styles.editProfileImg}
          src={
            err
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Solid_grey.svg/2048px-Solid_grey.svg.png"
              : user.image
          }
        ></img>
        <img className={styles.editProfileBannerImg} src=""></img>
      </div>
      <div className={styles.editProfileImgBtn}>
        <div></div>
        <button disabled={err && true} className="secondaryBtn">
          Edit Profile
        </button>
      </div>
      <div className={styles.editProfileDetails}>
        <p className={styles.editProfileName}>{err ? "Profile" : user.name}</p>
        <p className={styles.editProfileUserName}>
          @{err ? userParam : user.username}
        </p>
        <div className={styles.editProfileDate}>
          <AiOutlineCalendar></AiOutlineCalendar>
          <p className={styles.editProfileDateTime}>
            {err ? "" : Date(user.createdAt)}
          </p>
        </div>
        <div className={styles.editProfileFollow}>
          {err ? (
            <p>Not found</p>
          ) : (
            <>
              <a>
                <span>{user.followings}</span> Following
              </a>
              <a>
                <span>{user.followers}</span> Followers
              </a>
            </>
          )}
        </div>
      </div>
      <ProfileNav></ProfileNav>
    </div>
  );
};

export default EditProfile;
