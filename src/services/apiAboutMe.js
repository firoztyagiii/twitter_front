import { toast } from "react-toastify";
import { HOST } from "../utils/host";
import axios from "axios";

const apiAboutMe = async () => {
  try {
    const res = await axios.get(`${HOST}/api/v1/user/aboutme`);
    return res.data.data;
  } catch (err) {
    if (!err.isAxiosError) {
      toast.error("Something went wrong!");
    }
  }
};

export default apiAboutMe;
