import Row from "../UI/Row/Row";
import WebLayout from "../UI/WebLayout/WebLayout";
import Explore from "../components/Explore/Explore";
import Menu from "../components/Menu/Menu";

const Profile = () => {
  return (
    <Row>
      <WebLayout>
        <Menu></Menu>
        {/* <Timeline></Timeline> */}
        <div>PROFILE</div>
        <Explore></Explore>
      </WebLayout>
    </Row>
  );
};

export default Profile;
