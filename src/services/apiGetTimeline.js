import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

const apiGetTimeline = async () => {
  try {
    const res = await axios.get(`${HOST}/api/v1/user/timeline`);
    return res.data.data;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
    }
  }
};

export default apiGetTimeline;
