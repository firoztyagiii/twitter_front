import styles from "./Timeline.module.css";
import TweetInput from "../TweetInput/TweetInput";
import Tweet from "../Tweet/Tweet";
import { useQuery } from "react-query";
import apiGetTweets from "../../services/apiGetTweets";
import { toast } from "react-toastify";
import Spinner from "../../UI/Spinner/Spinner";

const Timeline = () => {
  const { isLoading, data } = useQuery({
    queryFn: apiGetTweets,
    queryKey: ["tweets"],
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  const tweetData =
    data?.data.docs.length !== 0
      ? data?.data.docs.map((tweet: ITweet.Tweet) => {
          return <Tweet key={tweet._id} data={tweet}></Tweet>;
        })
      : "No tweets";

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
      {isLoading ? <Spinner></Spinner> : tweetData}
    </div>
  );
};
export default Timeline;
