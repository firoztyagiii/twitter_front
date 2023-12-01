import styles from "./OperationButton.module.css";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useMutation } from "react-query";

import { apiLikeTweet } from "../../../services/apiTweetOperations";

const OperationButton = ({
  content,
  type,
  tweet,
  onClick: showFormHandler,
  update,
}) => {
  const mutationQuery = useMutation({
    mutationKey: ["like"],
    mutationFn: async () => {
      return apiLikeTweet(tweet._id);
    },
    onSuccess: () => {
      const updatedCount = tweet.likes + 1;
      update(updatedCount);
    },
  });

  const stopPropogate = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // if (type === "like") {
    //   mutationQuery.mutate();
    // }
    console.log("CLICKED ON OPERATION BUTTON...");
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
      onClick={(e) => {
        stopPropogate(e);
        if (showFormHandler) {
          showFormHandler();
        }
      }}
      className={`${styles.tweetOperation} ${style}`}
    >
      <Icon></Icon>
      <p>{content}</p>
    </div>
  );
};

export default OperationButton;
