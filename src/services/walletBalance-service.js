import instance from "../utils/axios";
import { API_URL } from "../utils/constants";

export async function getWalletBalance(id) {
  const response = await fetch(
    "https://1e3e-103-250-137-113.ngrok-free.app" +
      API_URL.GET_BALANCE(id),
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
