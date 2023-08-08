import Row from "../UI/Row/Row";
import WebLayout from "../UI/WebLayout/WebLayout";
import Explore from "../components/Explore/Explore";
import Menu from "../components/Menu/Menu";
import Profile from "../components/Profile/Profile";

const ProfilePage = () => {
  return (
    <Row>
      <WebLayout>
        <Menu></Menu>
        <Profile></Profile>
        <Explore></Explore>
      </WebLayout>
    </Row>
  );
};

export default ProfilePage;
