import axios from "axios";
import { HOST } from "../utils/host";
import { toast } from "react-toastify";

const apiLikeTweet = async (tweetId) => {
  try {
    const res = await axios.post(`${HOST}/api/v1/like/${tweetId}/add`);
    return res.data;
  } catch (err) {
    if (err.isAxiosError) {
      // toast.error(err.response.data.message);
      throw new Error(err.response.data.message);
    }
  }
};

const apiUnlikeTweet = async (tweetId) => {
  try {
    const res = await axios.post(`${HOST}/api/v1/like/${tweetId}/remove`);
    return res.data;
  } catch (err) {
    if (err.isAxiosError) {
      // toast.error(err.response.data.message);
      throw new Error(err.response.data.message);
    }
  }
};

const apiReplyTweet = async (data) => {
  try {
    const res = await axios.post(`${HOST}/api/v1/tweet/${data.tweetId}/reply`, {
      content: data.reply,
    });
    return res.data;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
      throw new Error(err.response.data.message);
    }
  }
};

const apiGetReplies = async (tweetId) => {
  try {
    const res = await axios.get(`${HOST}/api/v1/reply/${tweetId}`);
    return res.data.data.replies;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
      throw new Error(err.response.data.message);
    }
  }
};

const apiRepost = async (tweetId) => {
  try {
    const res = await axios.post(`${HOST}/api/v1/tweet/${tweetId}/repost`);
    return res.data;
  } catch (err) {
    if (err.isAxiosError) {
      toast.error(err.response.data.message);
      throw new Error(err.response.data.message);
    }
  }
};

export {
  apiLikeTweet,
  apiReplyTweet,
  apiGetReplies,
  apiUnlikeTweet,
  apiRepost,
};
