import styles from "./Timeline.module.css";
import TweetInput from "../TweetInput/TweetInput";

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
    </div>
  );
};
export default Timeline;
