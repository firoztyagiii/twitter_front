import styles from "./UserTweet.module.css";
import Tweet from "../../Tweet/Tweet";
import { useQuery } from "react-query";
import apiGetTweets from "../../../services/apiGetTweets";
import Spinner from "../../../UI/Spinner/Spinner";
import { Link } from "react-router-dom";

const UserTweet = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["tweets"],
    queryFn: async () => {
      return apiGetTweets();
    },
  });

  return (
    <>
      {isLoading && (
        <div className={styles.relative}>
          <Spinner></Spinner>
        </div>
      )}
      {isError && <p>Something went wrong</p>}
      {data &&
        data.map((tweet: ITweet.Tweet) => {
          return (
            <Link key={tweet._id} to={`/web/${tweet.user}/tweet/${tweet._id}`}>
              <Tweet data={tweet}></Tweet>
            </Link>
          );
        })}
    </>
  );
};

export default UserTweet;
