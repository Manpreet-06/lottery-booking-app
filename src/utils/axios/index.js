/* Custom axios instance */

import axios from 'axios';


 const instance = axios.create({
  baseURL: "https://f94a-103-250-137-113.ngrok-free.app",
});

instance.interceptors.request.use(async (reqConfig) => {
  let { headers } = reqConfig;

  const token = "1234567890";

  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      "Content-Type": 'application/json',
      'ngrok-skip-browser-warning': 'true' 
    };
  }
  return {
    ...reqConfig,
    headers,
  };
});

export default instance;
