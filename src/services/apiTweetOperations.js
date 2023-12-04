import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

const apiLikeTweet = async (tweetId) => {
  try {
    const res = await axios.post(`${HOST}/api/v1/like/${tweetId}/add`);
    return res.data;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
    }
  }
};

export { apiLikeTweet };
