import { HOST } from "../utils/host";

const apiGetUser = async (user) => {
  try {
    const response = await fetch(`${HOST}/api/v1/user/${user}`);
    if (!response.ok) {
      throw new Error("Could not find the user");
    }
    const res = await response.json();
    return res.data.user;
  } catch (err) {
    throw err;
  }
};

export default apiGetUser;