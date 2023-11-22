import { HOST } from "../utils/host";

const apiFollowAdd = async (data: Follow.IFollow) => {
  try {
    const response = await fetch(`${HOST}/api/v1/follow/${data.followId}/add`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Something went wrong!!");
    }
    const res = await response.json();
    return res;
  } catch (err) {
    throw err;
  }
};
export default apiFollowAdd;
