import { PropsWithChildren, useState } from "react";
import styles from "./Tweet.module.css";

import getTweetTime from "../../utils/getTweetTime";
import { useSelector } from "react-redux";
import OperationButton from "./OperationButton/OperationButton";
import { AiOutlineShareAlt } from "react-icons/ai";
import Modal from "../../UI/Modal/Modal";
import TweetReplyForm from "../TweetReplyForm/TweetReplyForm";

const Tweet = ({ data }) => {
  const tweetTime = getTweetTime(data.createdAt);
  const userImg = useSelector((state) => state.user.user.image);
  const [likes, setLikes] = useState(data.likes);

  return (
    <div className={styles.tweet}>
      <div className={styles.tweetImgContainer}>
        <img
          className={styles.tweetImg}
          src={`${data.user.image || userImg}`}
        ></img>
      </div>
      <div className={styles.tweetContainer}>
        <div className={styles.tweetContainerUser}>
          <p className={styles.tweetName}>{data.user.name}</p>
          <p className={styles.tweetUsername}>@{data.user.username}</p>
          <p className={styles.tweetTime}>{tweetTime}</p>
        </div>
        <p className={styles.tweetContent}>{data.content}</p>
        <div className={styles.tweetOperations}>
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
  );
};

export default Tweet;
