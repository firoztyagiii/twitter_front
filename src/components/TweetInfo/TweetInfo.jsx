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
import { Link } from "react-router-dom";
import OperationButton from "../Tweet/OperationButton/OperationButton";
import { HOST } from "../../utils/host";

const TweetInfo = () => {
  const { tweetId } = useParams();

  const { isLoading, data } = useQuery({
    queryFn: async () => apiTweetInfo(tweetId),
    queryKey: ["tweetInfo"],
  });

  return (
    <div className={styles.tweetInfo}>
      {isLoading && <Spinner></Spinner>}
      {!isLoading && data && (
        <div className={styles.tweetInfoUser}>
          <div className={styles.tweetInfoBack}>
            <Link to="../">
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </Link>
            <p>Post</p>
          </div>
          <div className={styles.tweetInfoUserContent}>
            <div className={styles.tweetInfoUserContentProfile}>
              <div className={styles.tweetInfoUserContentImg}>
                <img src={data.user.image} alt="" />
              </div>
              <div>
                <a
                  href={`/${data.user.username}`}
                  className={styles.tweetInfoName}
                >
                  {data.user.name}
                </a>
                <p className={styles.tweetInfoUserName}>@{data.user.name}</p>
              </div>
            </div>
            <p className={styles.tweetInfoContentText}>{data.content}</p>
            {data.media && (
              <img
                className={styles.tweetMedia}
                src={`${HOST}/${data.media}`}
              ></img>
            )}
            <div className={styles.tweetInfoContentTime}>
              <p className={styles.tweetInfoUserTweetTime}>{data.createdAt}</p>
              <span>
                <p>1.2M</p>
                <p className={styles.view}>Views</p>
              </span>
            </div>
            <div className={styles.tweetInfoOpertions}>
              <OperationButton
                tweet={data}
                type="comment"
                content={data.replies}
              ></OperationButton>

              <OperationButton
                tweet={data}
                type="retweet"
                content={data.retweet}
              ></OperationButton>
              <OperationButton
                tweet={data}
                type="like"
                content={data.likes}
              ></OperationButton>

              <div className={styles.tweetInfoOpertion}>
                <GoBookmark></GoBookmark>
                <p className={styles.tweetInfoOperationCount}></p>
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
