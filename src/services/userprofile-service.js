import instance from "../utils/axios";
import { API_URL } from "../utils/constants";

export async function getUserProfile(id) {
  const response = await fetch(
    "https://jagaranpustikaonline.com" +
      API_URL.GET_USER_PROFILE(id),
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    }
  );
  if (response.ok) {
    const jsonData = await response.json();
    return jsonData;
  } else {
    return response.json();
  }
}
