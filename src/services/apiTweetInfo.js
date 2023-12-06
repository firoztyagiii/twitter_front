import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

const apiTweetInfo = async (id) => {
  try {
    const res = await axios.get(`${HOST}/api/v1/tweet/${id}`);
    return res.data.data.tweet;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
    }
  }
};

export default apiTweetInfo;
