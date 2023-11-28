export async function placeOrderService(payload) {
  const data = payload;
  const response = await fetch(
    "https://jagaranpustikaonline.com/api/order/placeOrder",
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
