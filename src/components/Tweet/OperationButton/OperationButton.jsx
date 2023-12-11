import styles from "./OperationButton.module.css";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useMutation } from "react-query";

import {
  apiLikeTweet,
  apiReplyTweet,
} from "../../../services/apiTweetOperations";
import { useState } from "react";

const OperationButton = ({
  content,
  type,
  tweet,
  onClick: showFormHandler,
  update,
}) => {
  const [likeStyle, setLikeStyle] = useState("");

  const likeMutationQuery = useMutation({
    mutationKey: ["like"],
    mutationFn: async (_id) => {
      return apiLikeTweet(_id);
    },

    onError: () => {},

    onSuccess: (data) => {
      const updatedCount = tweet.likes + 1;
      update(updatedCount);
      setLikeStyle(styles.tweetOperationFinish);
    },
  });

  // const replyMutationQuery = useMutation({
  //   mutationFn: async (tweetId) => {
  //     return apiReplyTweet(tweetId);
  //   },
  // });

  const stopPropogate = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  let style = "";
  let Icon;

  if (type === "like") {
    style = styles.tweetLike;
    Icon = AiOutlineHeart;
  } else if (type === "retweet") {
    style = styles.tweetRetweet;
    Icon = AiOutlineRetweet;
  } else if (type === "comment") {
    style = styles.tweetComment;
    Icon = AiOutlineComment;
  }

  return (
    <div
      onClick={async (e) => {
        stopPropogate(e);

        if (type === "like") {
          likeMutationQuery.mutate(tweet._id);
        }

        if (showFormHandler) {
          showFormHandler();
        }
      }}
      className={`${styles.tweetOperation} ${style}`}
    >
      <span className={`${styles.tweetOperationBg} ${likeStyle}`}>
        {/* <span className={styles["tweetOperationBg tweetOperationFinish"]}> */}
        <p>{content}</p>
        <Icon></Icon>
      </span>
    </div>
  );
};

export default OperationButton;
