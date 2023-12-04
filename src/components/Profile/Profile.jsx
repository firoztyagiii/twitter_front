import EditProfile from "../EditProfile/EditProfile";
import styles from "./Profile.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useQuery } from "react-query";
import apiGetUser from "../../services/apiGetUser";
import Spinner from "../../UI/Spinner/Spinner";
import { Outlet } from "react-router-dom";

const Profile = ({ userParams }) => {
  const { isLoading, data, error } = useQuery({
    queryFn: () => apiGetUser(userParams || ""),
    queryKey: ["profile"],
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
                  {error ? "Profile" : data?.name}
                </p>
                <p className={styles.profileNavUserTweet}>
                  {error ? "" : `${4} tweets`}
                </p>
              </div>
            </div>
            <div className={styles.profileNavDetial}></div>
          </div>
          <EditProfile err={error} user={data}></EditProfile>
        </>
      )}
      <Outlet></Outlet>
    </div>
  );
};

export default Profile;
