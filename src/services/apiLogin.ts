const HOST = "http://127.0.0.1/api/v1";

const apiLogin = async (email: string, password: string) => {
  try {
    const response = await fetch(`${HOST}/user/login`, {
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
