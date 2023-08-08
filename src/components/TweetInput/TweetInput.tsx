import { PropsWithChildren } from "react";
import styles from "./TweetInput.module.css";
import { AiOutlineFileImage } from "react-icons/ai";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";

const TweetInput: React.FC<PropsWithChildren> = () => {
  return (
    <div className={styles.tweet}>
      <img src="logo.png" className={styles.tweetImg}></img>
      <input
        className={styles.tweetInput}
        placeholder="Whats happening..."
      ></input>
      <span></span>
      <div className={styles.tweetButton}>
        <div className={styles.detailsBtn}>
          <AiOutlineFileImage></AiOutlineFileImage>
          <AiOutlineVideoCameraAdd></AiOutlineVideoCameraAdd>
        </div>
        <div className={styles.tweetButtonContainer}>
          <button className="primaryBtn">Post</button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
