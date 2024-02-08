"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <main className={`${jakarta.variable} font-jakarta`}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
