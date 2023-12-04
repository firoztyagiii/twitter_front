import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

const apiLogin = async (email, password) => {
  try {
    const res = await axios.post(
      `${HOST}/api/v1/user/login`,
      {
        email,
        password,
      },
      {
        headers: {
          credentials: "include",
        },
      }
    );
    return res.data;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
    }
  }
};

export default apiLogin;
