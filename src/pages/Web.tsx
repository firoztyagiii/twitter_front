import { useSelector } from "react-redux";
import Row from "../UI/Row/Row";
import WebLayout from "../UI/WebLayout/WebLayout";
import Explore from "../components/Explore/Explore";
import Menu from "../components/Menu/Menu";
import Timeline from "../components/Timeline/Timeline";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Web = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <Row>
      <WebLayout>
        <Menu></Menu>
        <Timeline></Timeline>
        <Explore></Explore>
      </WebLayout>
    </Row>
  );
};

export default Web;
