import { HOST } from "../utils/host";

const apiTweetInfo = async (id) => {
  try {
    const response = await fetch(`${HOST}/api/v1/tweet/${id}`);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const tweet = await response.json();
    return tweet.data.tweet;
  } catch (err) {
    throw err;
  }
};

export default apiTweetInfo;
