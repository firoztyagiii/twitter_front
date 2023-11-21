import { HOST } from "../utils/host";

const apiAboutMe = async () => {
  try {
    const response = await fetch(`${HOST}/api/v1/user/aboutme`);
    const user = await response.json();
    return user.data;
  } catch (err) {
    throw err;
  }
};

export default apiAboutMe;
