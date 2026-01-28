import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapp-backend-ihmk.onrender.com/api",
  withCredentials: true,
});
