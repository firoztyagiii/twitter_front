import Row from "../UI/Row/Row";
import WebLayout from "../UI/WebLayout/WebLayout";
import Auth from "../components/Auth/Auth";
import Explore from "../components/Explore/Explore";
import Menu from "../components/Menu/Menu";
import Timeline from "../components/Timeline/Timeline";

const Web = () => {
  // const user = useSelector((state: RootState) => state.user);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user.isLoggedIn) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <Auth>
      <Row>
        <WebLayout>
          <Menu></Menu>
          <Timeline></Timeline>
          <Explore></Explore>
        </WebLayout>
      </Row>
    </Auth>
  );
};

export default Web;
