import { HOST } from "../utils/host";

const apiPostTweet = async (content: string) => {
  try {
    const response = await fetch(`${HOST}/api/v1/tweet`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        content: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Unable to tweet, Please try again later...");
    }
    const tweet = await response.json();
    return tweet;
  } catch (err) {
    throw err;
  }
};

export default apiPostTweet;
