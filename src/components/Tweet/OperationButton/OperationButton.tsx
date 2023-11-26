import styles from "./OperationButton.module.css";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useMutation } from "react-query";

import { apiLikeTweet } from "../../../services/apiTweetOperations";

interface Props {
  type: string;
  content: number | string;
  tweet: any;
  update: (like: number) => void;
}

const OperationButton = ({
  content,
  type,
  tweet,
  update,
}: React.PropsWithChildren<Props>) => {
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
  console.log(content, "likessss");
  const stopPropogate = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (type === "like") {
      mutationQuery.mutate();
    }
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
      onClick={stopPropogate}
      className={`${styles.tweetOperation} ${style}`}
    >
      <Icon></Icon>
      <p>{content}</p>
    </div>
  );
};

export default OperationButton;
