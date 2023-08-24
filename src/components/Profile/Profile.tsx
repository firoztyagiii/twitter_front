import { PropsWithChildren } from "react";
import EditProfile from "../EditProfile/EditProfile";
import styles from "./Profile.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useQuery } from "react-query";
import apiGetUser from "../../services/apiGetUser";
import Spinner from "../../UI/Spinner/Spinner";

interface Props extends PropsWithChildren {
  userParams: string | undefined;
}

const Profile: React.FC<Props> = ({ userParams }) => {
  const { isLoading, data, error } = useQuery({
    queryFn: () => apiGetUser(userParams || ""),
    queryKey: ["user"],
  });

  return (
    <div className={styles.profile}>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <div className={styles.profileNav}>
            <div className={styles.profileNavBackBtn}>
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
              <div className={styles.profileNavUserDetail}>
                <p className={styles.profileNavUserName}>
                  {error ? "Profile" : data.data.user.name}
                </p>
                <p className={styles.profileNavUserTweet}>
                  {error ? "" : `${5} tweets`}
                </p>
              </div>
            </div>
            <div className={styles.profileNavDetial}></div>
          </div>
          <EditProfile
            err={error as Error}
            user={data?.data.user}
          ></EditProfile>
        </>
      )}
      {/* <Tweet></Tweet> */}
    </div>
  );
};

export default Profile;
