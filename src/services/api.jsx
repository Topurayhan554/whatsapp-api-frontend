import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || "Something went wrong!";
    return Promise.reject(new Error(message));
  },
);

// WhatsApp status
export const getStatus = () => api.get("/status");

// Message
export const sendMessage = (phone, message) =>
  api.post("/message/send", { phone, message });
