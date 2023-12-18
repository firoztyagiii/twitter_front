import axios from "axios";
import { toast } from "react-toastify";
import { HOST } from "../utils/host";

const apiGetUserByPass = async (password, username) => {
  try {
    const res = await axios.post(`${HOST}/api/v1/user/${username}/info`, {
      password,
    });
    return res.data.data;
  } catch (err) {
    if (err.isAxiosError) {
      throw new Error(err.response.data.message);
    }
  }
};

export default apiGetUserByPass;
