import instance from "../utils/axios";
import { API_URL } from "../utils/constants";

export async function getWalletHistory(id) {
  const response = await fetch(
    "https://8467-2401-4900-1f3f-840f-a945-df7b-5fd8-f68.ngrok-free.app" +
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
