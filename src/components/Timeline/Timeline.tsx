import styles from "./Timeline.module.css";
import TweetInput from "../TweetInput/TweetInput";
import Tweet from "../Tweet/Tweet";

const Timeline = () => {
  // const [activeTab, setActiveTab] = useState("");

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
      <Tweet></Tweet>
      <Tweet></Tweet>
    </div>
  );
};
export default Timeline;
