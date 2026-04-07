import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: '',
  timeout: 1000,
});

export default AxiosInstance