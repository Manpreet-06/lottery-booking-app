import { API_URL } from "../utils/constants";

export async function placeOrderService(payload) {
  const data = payload;
  const response = await fetch(
    "https://1e3e-103-250-137-113.ngrok-free.app" + API_URL.PLACE_ORDER,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify(data),
    }
  );
  if (response.ok) {
    const jsonData = await response.json();
    return jsonData;
  } else {
    return response.json();
  }
}
