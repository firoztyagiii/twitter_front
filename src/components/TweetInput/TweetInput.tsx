import { PropsWithChildren, SyntheticEvent, useState } from "react";
import styles from "./TweetInput.module.css";
import { AiOutlineFileImage } from "react-icons/ai";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TweetInput: React.FC<PropsWithChildren> = () => {
  const [tweetInput, setTweetInput] = useState("");

  const { user } = useSelector((state: RootState) => state.user);
  const percentage = Math.ceil((tweetInput.length / 150) * 100);
  let color;

  if (percentage < 50 || percentage < 75) {
    color = "#2ecc71";
  } else if (percentage > 75 && percentage <= 99) {
    color = "#e67e22";
  } else if (percentage >= 100) {
    color = "#e74c3c";
  }

  const tweetInputChangeHandler = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.inputType === "deleteContentBackward") {
      setTweetInput(e.target.value);
      return;
    }

    if (percentage > 99) {
      return;
    }

    setTweetInput(e.target.value);
  };

  return (
    <div className={styles.tweet}>
      <img src={`${user.image}`} className={styles.tweetImg}></img>

      <textarea
        onChange={tweetInputChangeHandler}
        placeholder="What's happening..."
        className={styles.tweetInput}
        value={`${tweetInput}`}
      ></textarea>

      <span></span>
      <div className={styles.tweetButton}>
        <div className={styles.detailsBtn}>
          <AiOutlineFileImage></AiOutlineFileImage>
          <AiOutlineVideoCameraAdd></AiOutlineVideoCameraAdd>
        </div>
        <div className={styles.tweetButtonContainer}>
          <div style={{ width: 40, height: 40 }}>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: color,
              })}
              value={percentage}
            />
          </div>

          <button disabled={percentage > 99 && true} className="primaryBtn">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
