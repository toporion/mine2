import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // Backend URL
});

export default axiosInstance;
