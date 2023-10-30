/* Custom axios instance */

import axios from 'axios';


const instance = axios.create({
  baseURL: "https://8330-2401-4900-1f3f-840f-4976-476c-fae5-9ff4.ngrok-free.app",
});

instance.interceptors.request.use(async (reqConfig) => {
  let { headers } = reqConfig;

  const token = "1234567890";

  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    };
  }
  return {
    ...reqConfig,
    headers,
  };
});

export default instance;
