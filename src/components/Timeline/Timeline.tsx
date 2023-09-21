import styles from "./Timeline.module.css";
import TweetInput from "../TweetInput/TweetInput";
import Tweet from "../Tweet/Tweet";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Spinner from "../../UI/Spinner/Spinner";
import { Link } from "react-router-dom";
import apiGetTimeline from "../../services/apiGetTimeline";

const Timeline = () => {
  const { isLoading, data } = useQuery({
    queryFn: apiGetTimeline,
    queryKey: ["timeline"],

    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  const tweetData =
    data?.length !== 0
      ? data?.map((tweet: ITweet.Tweet) => {
          return (
            <Link
              key={tweet._id}
              to={`${tweet.user.username}/tweet/${tweet._id}`}
            >
              <Tweet data={tweet}></Tweet>
            </Link>
          );
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
