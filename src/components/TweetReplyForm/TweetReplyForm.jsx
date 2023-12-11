import { useState } from "react";
import styles from "./TweetReplyForm.module.css";
import Button from "../../UI/Button/Button";
import { useMutation } from "react-query";
import { apiReplyTweet } from "../../services/apiTweetOperations";

const TweetReplyForm = (props) => {
  const [reply, setReply] = useState("");

  const mutationQuery = useMutation({
    mutationFn: async (data) => {
      return apiReplyTweet(data);
    },
  });

  const replyHandler = () => {
    mutationQuery.mutate({ tweetId: props.tweet._id, reply });
  };

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
        <textarea
          className={styles.replyInput}
          type="text"
          placeholder="Post your reply"
          value={reply}
          onChange={(e) => {
            setReply(e.target.value);
          }}
        ></textarea>
      </div>
      <div className={styles.tweetReplySubmit}>
        <div></div>
        <Button onclick={replyHandler} kind="primary">
          Reply
        </Button>
      </div>
    </div>
  );
};

export default TweetReplyForm;
