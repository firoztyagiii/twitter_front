import { Outlet, useParams } from "react-router-dom";
import Row from "../UI/Row/Row";
import WebLayout from "../UI/WebLayout/WebLayout";
import Explore from "../components/Explore/Explore";
import Menu from "../components/Menu/Menu";
import Timeline from "../components/Timeline/Timeline";

const Web = () => {
  const { tweetId } = useParams();
  return (
    <Row>
      <WebLayout>
        <Menu></Menu>
        {tweetId ? <Outlet></Outlet> : <Timeline></Timeline>}
        <Explore></Explore>
      </WebLayout>
    </Row>
  );
};

export default Web;
