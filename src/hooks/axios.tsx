import axios from "axios";

const baseURL = "https://aura-api.vercel.app/";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
