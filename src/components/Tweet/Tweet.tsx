import { PropsWithChildren } from "react";
import styles from "./Tweet.module.css";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";

import { BiStats } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import getTweetTime from "../../utils/getTweetTime";

interface Props extends PropsWithChildren {
  data: ITweet.Tweet;
}

const Tweet: React.FC<Props> = ({ data }) => {
  const { user } = useSelector((state: RootState) => state.user);
  console.log(user);

  const tweetTime = getTweetTime(data.createdAt);
  return (
    <div className={styles.tweet}>
      <div className={styles.tweetImgContainer}>
        <img className={styles.tweetImg} src={`${user.image}`}></img>
      </div>
      <div className={styles.tweetContainer}>
        <div className={styles.tweetContainerUser}>
          <p className={styles.tweetName}>{user.name}</p>
          <p className={styles.tweetUsername}>@{user.username}</p>
          <p className={styles.tweetTime}>{tweetTime}</p>
        </div>
        <p className={styles.tweetContent}>{data.content}</p>
        <div className={styles.tweetOperations}>
          <div className={styles.tweetOperation}>
            <AiOutlineComment></AiOutlineComment>
            <p>{data.replies}</p>
          </div>
          <div className={styles.tweetOperation}>
            <AiOutlineRetweet></AiOutlineRetweet>
            <p>{data.retweet}</p>
          </div>
          <div className={styles.tweetOperation}>
            <AiOutlineHeart></AiOutlineHeart>
            <p>{data.likes}</p>
          </div>
          <div className={styles.tweetOperation}>
            <BiStats></BiStats>
            <p>undefined</p>
          </div>
          <div className={styles.tweetOperation}>
            <AiOutlineShareAlt></AiOutlineShareAlt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
