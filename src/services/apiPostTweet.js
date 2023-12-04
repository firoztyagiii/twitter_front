import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

const apiPostTweet = async (content) => {
  try {
    const form = new FormData();
    form.append("image", content.media);
    form.append("content", content.tweet);

    const res = await axios.post(`${HOST}/api/v1/tweet`, form, {
      headers: { credentials: "include" },
    });

    return res.data;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
    }
  }
};

export default apiPostTweet;
