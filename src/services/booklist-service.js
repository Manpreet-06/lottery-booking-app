import { API_URL } from "../utils/constants";

export async function bookListData() {
  const response = await fetch("https://df73-2401-4900-1f3f-840f-edcf-13dc-97d3-b8fb.ngrok-free.app" + API_URL.GET_BOOKLIST(),
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

  