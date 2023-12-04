import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

const apiGetUser = async (user) => {
  try {
    const res = await axios.get(`${HOST}/api/v1/user/${user}`);
    return res.data.data.user;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
    }
  }
};

export default apiGetUser;
