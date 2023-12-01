import { useState } from "react";
import styles from "./TweetReplyForm.module.css";
import Button from "../../UI/Button/Button";

const TweetReplyForm = (props) => {
  const [reply, setReply] = useState("");

  return (
    <div className={styles.tweetReplyForm}>
      <div className={styles.tweetReplyFormImg}>
        <img
          src={props.tweet.user.image}
          className={styles.tweetReplyFormImage}
        ></img>
        <div className={styles.tweetReplyFormUser}>
          <p className={styles.tweetReplyFormUserName}>
            {props.tweet.user.name}
            <span>@{props.tweet.user.username}</span>
          </p>
          <p className={styles.tweetReplyFormUserContent}>
            {props.tweet.content}
          </p>
          <p className={styles.tweetReplyFormUserReply}>
            Replying to <span>@{props.tweet.user.username}</span>
          </p>
        </div>
      </div>
      <div className={styles.tweetReplyFormText}>
        <img
          src={props.tweet.user.image}
          className={styles.tweetReplyFormImage}
        ></img>
        <input
          className={styles.replyInput}
          type="text"
          placeholder="Post your reply"
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        ></input>
      </div>
      <div className={styles.tweetReplySubmit}>
        <div></div>
        <Button kind="primary">Reply</Button>
      </div>
    </div>
  );
};

export default TweetReplyForm;
