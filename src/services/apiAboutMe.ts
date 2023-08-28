import { HOST } from "../utils/host";

const apiAboutMe = async () => {
  try {
    const response = await fetch(`${HOST}/api/v1/user/aboutme`);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const user = await response.json();
    return user.data;
  } catch (err) {
    throw err;
  }
};

export default apiAboutMe;
