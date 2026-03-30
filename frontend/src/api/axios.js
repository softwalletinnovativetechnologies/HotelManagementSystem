import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

// 🔥 REQUEST INTERCEPTOR (token auto attach)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// 🔥 RESPONSE INTERCEPTOR (auto logout on expire)
API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.log("Unauthorized - but not logging out");
    }
    return Promise.reject(err);
  },
);

export default API;
