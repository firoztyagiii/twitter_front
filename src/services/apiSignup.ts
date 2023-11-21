import { HOST } from "../utils/host";

const apiSignup = async (data: IUser.LoginUser) => {
  try {
    console.log(data);
    const response = await fetch(`${HOST}/api/v1/user/signup`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    return res;
  } catch (err) {
    throw err;
  }
};

export default apiSignup;
