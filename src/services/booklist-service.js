import { API_URL } from "../utils/constants";

export async function bookListData() {
  const response = await fetch("https://a94d-103-250-137-113.ngrok-free.app" + API_URL.GET_BOOKLIST(),
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'ngrok-skip-browser-warning': 'true' 
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

  