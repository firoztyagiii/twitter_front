import Row from "../UI/Row/Row";
import WebLayout from "../UI/WebLayout/WebLayout";
import Explore from "../components/Explore/Explore";
import Menu from "../components/Menu/Menu";
import TweetInfo from "../components/TweetInfo/TweetInfo";

const TweetInfoPage = () => {
  return (
    <Row>
      <WebLayout>
        <Menu></Menu>
        <TweetInfo></TweetInfo>
        <Explore></Explore>
      </WebLayout>
    </Row>
  );
};

export default TweetInfoPage;
