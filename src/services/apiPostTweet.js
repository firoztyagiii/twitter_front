import { HOST } from "../utils/host";

const apiPostTweet = async (content) => {
  try {
    const form = new FormData();
    form.append("image", content.media);
    form.append("tweet", content.tweet);

    const response = await fetch(`${HOST}/api/v1/tweet`, {
      method: "POST",
      credentials: "include",
      body: { content: form },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
