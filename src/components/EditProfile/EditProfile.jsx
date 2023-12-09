import ProfileNav from "../ProfileNav/ProfileNav";
import styles from "./EditProfile.module.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMutation, useQuery } from "react-query";
import { apiFollowAdd } from "../../services/apiFollow";
import { toast } from "react-toastify";
import apiGetFollowStatus from "../../services/apiGetFollowStatus";

const EditProfile = ({ err, user }) => {
  const { user: userParam } = useParams();
  const { _id } = useSelector((state) => state.user.user);

  const mutateQuery = useMutation({
    mutationFn: async (data) => {
      return apiFollowAdd(data);
    },

    onSuccess: (data) => {
      if (data.status === "success") {
        toast.success("You have followed the user...");
      }
    },
  });

  const { isLoading, data, error } = useQuery({
    queryKey: ["followStatus"],
    queryFn: async () => {
      return apiGetFollowStatus(userParam);
    },
  });

  const followHandler = () => {
    if (!data.message) {
      mutateQuery.mutate({
        userId: _id,
        followId: user._id,
      });
    }
  };

  return (
    <div className={styles.editProfile}>
      <div className={styles.editProfileBannerContainer}>
        <img
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
        <button onClick={followHandler} className={styles.followBtn}>
          {isLoading
            ? "Fetching..."
            : !isLoading && data.message
            ? "Unfollow"
            : "Follow"}
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
