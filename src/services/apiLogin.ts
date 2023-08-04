const HOST = "http://127.0.0.1:8080/api/v1";

const apiLogin = async (data: { email: string; password: string }) => {
  try {
    const jsonData = JSON.stringify(data);
    const response = await fetch(`${HOST}/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: jsonData,
    });
    const res = await response.json();
    return res;
  } catch (err) {
    throw err;
  }
};

export default apiLogin;
