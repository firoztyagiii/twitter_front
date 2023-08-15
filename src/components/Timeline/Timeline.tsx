import styles from "./Timeline.module.css";
import TweetInput from "../TweetInput/TweetInput";
import Tweet from "../Tweet/Tweet";
import { useQuery } from "react-query";
import apiGetTweets from "../../services/apiGetTweets";
import Spinner from "../../UI/Spinner/Spinner";

const Timeline = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tweets"],
    queryFn: () => apiGetTweets(),
  });

  return (
    <div className={styles.timeline}>
      <div className={styles.timelineSticky}>
        <h2>Home</h2>
        <div className={styles.timelineForYou}>
          <p>For you</p>
          <p>Following</p>
        </div>
      </div>
      <TweetInput></TweetInput>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <>
          {data.data.docs.map((tweet) => {
            return <Tweet></Tweet>;
          })}
        </>
      )}
    </div>
  );
};
export default Timeline;
