import { HOST } from "../utils/host";

const apiGetTimeline = async (): Promise<ITweet.Tweet[]> => {
  try {
    const response = await fetch(`${HOST}/api/v1/user/timeline`);
    if (!response.ok) {
      throw new Error("Something went wrong!!");
    }
    const res = await response.json();
    console.log(res, "timeline resu;t");
    return res.data;
  } catch (err) {
    throw err;
  }
};

export default apiGetTimeline;
