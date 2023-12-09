import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

export const apiFollowAdd = async (data) => {
  try {
    const res = await axios.post(`${HOST}/api/v1/follow/${data.followId}/add`);

    return res.data;
  } catch (err) {
    console.log(err);
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
    }
  }
};

// export const apiFollowRemove = async () => {
//   try {
//     const res = await axios.post(`${HOST}/api/v1/follow/${data.followId}/add`);

//     return res.data;
//   } catch (err) {
//     console.log(err);
//     if (err.isAxiosError) {
//       toast.error(err.response.data.message);
//     }
//   }
// };
