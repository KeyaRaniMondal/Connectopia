// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.Mode==="development"?"http://localhost:5001/api":"/api",
//   withCredentials: true, 
//   headers: { "Content-Type": "application/json" },
  
// });

import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : import.meta.env.VITE_API_URL || "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // if server uses cookies
  headers: { "Content-Type": "application/json" },
});
