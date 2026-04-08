import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: 'https://unsaid-gramophonical-dian.ngrok-free.dev/',
  timeout: 1000,
});

export default AxiosInstance