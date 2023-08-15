import { useParams } from "react-router-dom";
import Row from "../UI/Row/Row";
import WebLayout from "../UI/WebLayout/WebLayout";
import Explore from "../components/Explore/Explore";
import Menu from "../components/Menu/Menu";
import Profile from "../components/Profile/Profile";
import { useQuery } from "react-query";
import apiGetUser from "../services/apiGetUser";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { user } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => apiGetUser(user),
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return (
    <Row>
      <WebLayout>
        <Menu></Menu>
        <Profile loading={isLoading}></Profile>
        <Explore></Explore>
      </WebLayout>
    </Row>
  );
};

export default ProfilePage;
