import { HOST } from "../utils/host";

const apiLikeTweet = async (tweetId) => {
  try {
    const response = await fetch(`${HOST}/api/v1/like/${tweetId}/add`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const res = await response.json();
    return res;
  } catch (err) {
    throw err;
  }
};

export { apiLikeTweet };
