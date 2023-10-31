import instance from "../utils/axios";
import { API_URL } from "../utils/constants";

export async function getUserProfile(id) {
  const response = await fetch(
    "https://8467-2401-4900-1f3f-840f-a945-df7b-5fd8-f68.ngrok-free.app" +
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
    console.log(jsonData);
    return jsonData;
  } else {
    return response.json();
  }
}
