import axios from "axios";

const api = axios.create({
  baseURL: "https://users-manager.onrender.com",
});

api.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");

  if (token) {
    request.headers!.Authorization = `Bearer ${token}`;
  }

  return request;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload();
    }

    throw error;
  }
);

export { api };
