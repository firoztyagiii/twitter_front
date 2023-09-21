import { useParams } from "react-router-dom";
import styles from "./TweetInfo.module.css";
import { useQuery } from "react-query";

const TweetInfo = () => {
  const { username, tweetId } = useParams();
  const query = useQuery({
    queryFn: () => {},
    queryKey: ["tweetInfo"],
  });
  return <div>TWEET INFO</div>;
};

export default TweetInfo;
