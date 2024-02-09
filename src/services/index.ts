"use client";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
