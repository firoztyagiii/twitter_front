import styles from "./OperationButton.module.css";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useMutation } from "react-query";

import {
  apiLikeTweet,
  apiReplyTweet,
} from "../../../services/apiTweetOperations";

const OperationButton = ({
  content,
  type,
  tweet,
  onClick: showFormHandler,
  update,
}) => {
  const mutationQuery = useMutation({
    mutationKey: ["like"],
    mutationFn: async (_id) => {
      return apiLikeTweet(_id);
    },

    onError: () => {},

    onSuccess: (data) => {
      const updatedCount = tweet.likes + 1;
      update(updatedCount);
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
          mutationQuery.mutate(tweet._id);
        }

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
