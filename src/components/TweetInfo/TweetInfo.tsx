import { useParams } from "react-router-dom";
import styles from "./TweetInfo.module.css";
import { useQuery } from "react-query";
import apiTweetInfo from "../../services/apiTweetInfo";
import Spinner from "../../UI/Spinner/Spinner";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import { GoBookmark } from "react-icons/go";

const TweetInfo = () => {
  const { tweetId } = useParams();

  const { isLoading, data } = useQuery({
    queryFn: async () => apiTweetInfo(tweetId),
    queryKey: ["tweetInfo"],
  });

  console.log(data);

  return (
    <div className={styles.tweetInfo}>
      {isLoading && <Spinner></Spinner>}
      {!isLoading && data && (
        <div className={styles.tweetInfoUser}>
          <div className={styles.tweetInfoBack}>
            <span>
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </span>
            <p>Post</p>
          </div>
          <div className={styles.tweetInfoUserContent}>
            <div className={styles.tweetInfoUserContentProfile}>
              <div className={styles.tweetInfoUserContentImg}>
                <img src={data.user.image} alt="" />
              </div>
              <div>
                <p className={styles.tweetInfoName}>Tristan tate</p>
                <p className={styles.tweetInfoUserName}>@tristantate</p>
              </div>
            </div>
            <p className={styles.tweetInfoContentText}>
              I need to follow more people. Who am I missing out on?
            </p>
            <div className={styles.tweetInfoContentTime}>
              <p className={styles.tweetInfoUserTweetTime}>
                {Date(data.createAt).substring(0, 10)}
              </p>
              <span>
                <p>1.2M</p>
                <p className={styles.view}>Views</p>
              </span>
            </div>
            <div className={styles.tweetInfoOpertions}>
              <div className={styles.tweetInfoOpertion}>
                <AiOutlineComment></AiOutlineComment>
                <p className={styles.tweetInfoOperationCount}>98</p>
              </div>
              <div className={styles.tweetInfoOpertion}>
                <AiOutlineRetweet></AiOutlineRetweet>
                <p className={styles.tweetInfoOperationCount}>122</p>
              </div>
              <div className={styles.tweetInfoOpertion}>
                <AiOutlineHeart></AiOutlineHeart>
                <p className={styles.tweetInfoOperationCount}>122</p>
              </div>
              <div className={styles.tweetInfoOpertion}>
                <GoBookmark></GoBookmark>
                <p className={styles.tweetInfoOperationCount}>122</p>
              </div>
              <div className={styles.tweetInfoOpertion}>
                <AiOutlineShareAlt></AiOutlineShareAlt>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TweetInfo;
