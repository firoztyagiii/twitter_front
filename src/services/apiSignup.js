import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

const apiSignup = async (data) => {
  try {
    const res = await axios.post(`${HOST}/api/v1/user/signup`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
    }
  }
};

export default apiSignup;
