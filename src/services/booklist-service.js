import { API_URL } from "../utils/constants";

export async function bookListData() {
  const response = await fetch("https://b903-2402-a00-401-df9e-a481-abc2-d927-94fc.ngrok-free.app" + API_URL.GET_BOOKLIST(),
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

  