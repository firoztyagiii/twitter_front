import styles from "./OperationButton.module.css";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";

import {
  apiLikeTweet,
  apiReplyTweet,
  apiRepost,
  apiUnlikeTweet,
} from "../../../services/apiTweetOperations";
import { useState } from "react";

const OperationButton = ({
  content,
  type,
  tweet,
  onClick: showFormHandler,
  update,
  liked,
}) => {
  const queryClient = useQueryClient();
  const [likeStyle, setLikeStyle] = useState("");

  const likeMutationQuery = useMutation({
    mutationKey: ["like"],
    mutationFn: async (_id) => {
      return apiLikeTweet(_id);
    },

    onSuccess: (data) => {
      const updatedCount = tweet.likes + 1;
      update(updatedCount);
      queryClient.invalidateQueries({ queryKey: ["timeline"] });
      setLikeStyle(styles.tweetOperationFinish);
    },
  });

  const unlikeMutationQuery = useMutation({
    mutationFn: async (_id) => {
      return apiUnlikeTweet(_id);
    },
    onSuccess: () => {
      const updatedCount = tweet.likes - 1;
      update(updatedCount);
      queryClient.invalidateQueries({ queryKey: ["timeline"] });
      setLikeStyle(styles.tweetOperationUnlike);
    },
  });

  const repostMutationQuery = useMutation({
    mutationFn: async (_id) => {
      return apiRepost(_id);
    },
    onSuccess: (data) => {
      console.log("REPOST ===>", data);
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

        if (type === "like" && !tweet.isLiked) {
          likeMutationQuery.mutate(tweet._id);
        }

        if (type === "like" && tweet.isLiked) {
          unlikeMutationQuery.mutate(tweet._id);
        }

        if (type === "retweet") {
          repostMutationQuery.mutate(tweet._id);
        }

        if (showFormHandler) {
          showFormHandler();
        }
      }}
      className={`${styles.tweetOperation} ${style}`}
    >
      <span
        className={`${styles.tweetOperationBg} ${
          liked && styles.liked
        } ${likeStyle}`}
      >
        <p>{content}</p>
        <Icon></Icon>
      </span>
    </div>
  );
};

export default OperationButton;
