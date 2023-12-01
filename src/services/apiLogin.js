import { HOST } from "../utils/host";

const apiLogin = async (email, password) => {
  try {
    const response = await fetch(`${HOST}/api/v1/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Invalid credentials");
    }
    const res = await response.json();
    return res;
  } catch (err) {
    throw err;
  }
};

export default apiLogin;
