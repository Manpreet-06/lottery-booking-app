/* Custom axios instance */

import axios from 'axios';


 export const instance = axios.create({
  baseURL: "https://e7be-2401-4900-1f3f-840f-4976-476c-fae5-9ff4.ngrok-free.app",
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
