import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

const apiFollowAdd = async (data) => {
  try {
    const res = await axios.post(`${HOST}/api/v1/follow/${data.followId}/add`);
    console.log(res.data, "fdsfjdsdshgg");

    return res.data;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
    }
  }
};
export default apiFollowAdd;
