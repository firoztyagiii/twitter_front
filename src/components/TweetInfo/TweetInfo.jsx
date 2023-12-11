import { useParams } from "react-router-dom";
import styles from "./TweetInfo.module.css";
import { useQueries, useQuery } from "react-query";
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
import { apiGetReplies } from "../../services/apiTweetOperations";
import Tweet from "../Tweet/Tweet";
import Modal from "../../UI/Modal/Modal";
import { useState } from "react";
import TweetReplyForm from "../TweetReplyForm/TweetReplyForm";

const TweetInfo = () => {
  const { tweetId } = useParams();
  const [likes, setLikes] = useState(0);

  const { isLoading, data } = useQuery({
    queryFn: async () => apiTweetInfo(tweetId),
    queryKey: ["tweetInfo"],
  });

  const replyData = useQuery({
    queryFn: async () => apiGetReplies(tweetId),
    queryKey: ["tweetReply"],
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
              <Modal>
                <Modal.Button>
                  <OperationButton
                    tweet={data}
                    type="comment"
                    content={data.replies}
                    update={setLikes}
                  ></OperationButton>
                </Modal.Button>

                <Modal.Window>
                  <TweetReplyForm tweet={data}></TweetReplyForm>
                </Modal.Window>
              </Modal>

              <OperationButton
                tweet={data}
                type="retweet"
                content={data.retweet}
                update={setLikes}
              ></OperationButton>
              <OperationButton
                tweet={data}
                type="like"
                update={setLikes}
                content={likes}
              ></OperationButton>
              <div className={styles.tweetOperation}>
                <AiOutlineShareAlt></AiOutlineShareAlt>
              </div>
            </div>
          </div>
        </div>
      )}
      {replyData.isLoading && <Spinner></Spinner>}
      {!replyData.isLoading &&
        replyData.data &&
        replyData.data.map((tweet) => {
          return <Tweet key={tweet._id} data={tweet}></Tweet>;
        })}
    </div>
  );
};

export default TweetInfo;
