import { useParams } from "react-router-dom";
import Row from "../UI/Row/Row";
import WebLayout from "../UI/WebLayout/WebLayout";
import Explore from "../components/Explore/Explore";
import Menu from "../components/Menu/Menu";
import Profile from "../components/Profile/Profile";

const ProfilePage = () => {
  const { user } = useParams();

  return (
    <Row>
      <WebLayout>
        <Menu></Menu>
        <Profile userParams={user}></Profile>
        <Explore></Explore>
      </WebLayout>
    </Row>
  );
};

export default ProfilePage;
