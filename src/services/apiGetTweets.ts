import { HOST } from "../utils/host";

const apiGetTweets = async () => {
  try {
    const response = await fetch(`${HOST}/api/v1/tweet`);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const res = await response.json();
    return res;
  } catch (err) {
    throw err;
  }
};

export default apiGetTweets;
