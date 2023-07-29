import HomeLayout from "../UI/HomeLayout/HomeLayout";
import HomeLeft from "../components/Main/HomeLeft";
import HomeRight from "../components/Main/HomeRight";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <HomeLeft></HomeLeft>
      <HomeRight></HomeRight>
      <Footer></Footer>
    </HomeLayout>
  );
};

export default Home;
