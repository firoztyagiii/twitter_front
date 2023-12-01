import { Outlet } from "react-router-dom";
import Row from "../UI/Row/Row";
import SettingsLayout from "../UI/SettingsLayout/SettingsLayout";
import Menu from "../components/Menu/Menu";
import SettingsLink from "../components/SettingsLink/SettingsLink";

const Settings = () => {
  return (
    <Row>
      <SettingsLayout>
        <Menu></Menu>
        <SettingsLink></SettingsLink>
        <Outlet></Outlet>
      </SettingsLayout>
    </Row>
  );
};

export default Settings;
