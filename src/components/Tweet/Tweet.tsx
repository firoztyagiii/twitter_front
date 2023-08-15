import { PropsWithChildren } from "react";
import styles from "./Tweet.module.css";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";

import { BiStats } from "react-icons/bi";

interface Props extends PropsWithChildren, ITweet.Tweet {}

const Tweet: React.FC<Props> = () => {
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
        <p className={styles.tweetContent}>
          Naya samaan aane vaala hai guess Karo kya hai
        </p>
        <div className={styles.tweetOperations}>
          <div className={styles.tweetOperation}>
            <AiOutlineComment></AiOutlineComment>
            <p>4522</p>
          </div>
          <div className={styles.tweetOperation}>
            <AiOutlineRetweet></AiOutlineRetweet>
            <p>120</p>
          </div>
          <div className={styles.tweetOperation}>
            <AiOutlineHeart></AiOutlineHeart>
            <p>451K</p>
          </div>
          <div className={styles.tweetOperation}>
            <BiStats></BiStats>
            <p>51K</p>
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
