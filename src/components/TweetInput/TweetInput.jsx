import { PropsWithChildren, SyntheticEvent, useState } from "react";
import styles from "./TweetInput.module.css";
import { AiOutlineFileImage } from "react-icons/ai";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useMutation, useQueryClient } from "react-query";
import apiPostTweet from "../../services/apiPostTweet";
import { toast } from "react-toastify";
import FileInput from "../../UI/FileInput/FileInput";

const TweetInput = () => {
  const query = useQueryClient();
  const [tweetInput, setTweetInput] = useState("");
  const [tweetPrevImg, setTweetPrevImg] = useState("");
  const [imageBlob, setimageBlob] = useState("");

  const { isLoading, mutate } = useMutation({
    mutationFn: (content) => {
      return apiPostTweet(content);
    },
    onSuccess: () => {
      toast.success("Tweeted successfully");
      query.invalidateQueries("tweets");
      setTweetInput("");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { user } = useSelector((state) => state.user);
  const percentage = Math.ceil((tweetInput.length / 150) * 100);
  let color;

  if (percentage < 50 || percentage < 75) {
    color = "#2ecc71";
  } else if (percentage > 75 && percentage <= 99) {
    color = "#e67e22";
  } else if (percentage >= 100) {
    color = "#e74c3c";
  }

  const tweetInputChangeHandler = (e) => {
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
      <div className={styles.tweetTextArea}>
        <img src={`${user.image}`} className={styles.tweetImg}></img>

        <textarea
          onChange={tweetInputChangeHandler}
          placeholder="What's happening..."
          className={styles.tweetInput}
          value={`${tweetInput}`}
        ></textarea>
      </div>
      {tweetPrevImg && (
        <div className={styles.tweetPrevImage}>
          <span
            onClick={() => {
              setTweetPrevImg("");
            }}
          >
            <AiOutlineClose />
          </span>
          <img src={tweetPrevImg}></img>
        </div>
      )}
      <span></span>
      <div className={styles.tweetButton}>
        <div className={styles.detailsBtn}>
          <FileInput blob={setimageBlob} changeHandler={setTweetPrevImg}>
            <AiOutlineFileImage title="Add photo"></AiOutlineFileImage>
          </FileInput>
          <AiOutlineVideoCameraAdd title="Add video"></AiOutlineVideoCameraAdd>
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

          <button
            onClick={() => {
              mutate({ tweet: tweetInput, media: imageBlob });
              setTweetPrevImg();
            }}
            disabled={(percentage > 99 && true) || percentage === 0}
            className="primaryBtn"
          >
            {isLoading ? "Tweeting..." : "Tweet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
