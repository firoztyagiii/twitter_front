import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

const apiGetTweets = async () => {
  try {
    const res = await axios.get(`${HOST}/api/v1/tweet`);
    return res.data.data.docs;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
    }
  }
};

export default apiGetTweets;
