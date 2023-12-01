import { HOST } from "../utils/host";

const apiGetFollowStatus = async (followId) => {
  try {
    const response = await fetch(`${HOST}/api/v1/follow/${followId}/status`);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const res = await response.json();
    return res;
  } catch (err) {
    throw err;
  }
};

export default apiGetFollowStatus;
