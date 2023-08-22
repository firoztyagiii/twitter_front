import { PropsWithChildren } from "react";
import styles from "./Tweet.module.css";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";

import { BiStats } from "react-icons/bi";

interface Props extends PropsWithChildren {
  data: ITweet.Tweet;
}

const Tweet: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.tweet}>
      <div className={styles.tweetImgContainer}>
        <img className={styles.tweetImg} src="logo.png"></img>
      </div>
      <div className={styles.tweetContainer}>
        <div className={styles.tweetContainerUser}>
          <p className={styles.tweetName}>Ajey Nagar</p>
          <p className={styles.tweetUsername}>@carryminati</p>
          <p className={styles.tweetTime}>15h</p>
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
