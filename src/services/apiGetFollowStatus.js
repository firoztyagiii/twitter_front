import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

const apiGetFollowStatus = async (followId) => {
  try {
    const res = await axios.get(`${HOST}/api/v1/follow/${followId}/status`);

    return res.data;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
    }
  }
};

export default apiGetFollowStatus;
