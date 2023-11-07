import { API_URL } from "../utils/constants";

export async function placeOrderService(payload) {
  const data = payload;
  const response = await fetch(
    "https://ba08-103-250-137-113.ngrok-free.app/api/order/placeOrder",
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
  console.log(response);
  if (response.ok) {
    const jsonData = await response.json();
    return jsonData;
  } else {
    return response.json();
  }
}
