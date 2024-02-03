"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return <Component {...pageProps} />;
}
