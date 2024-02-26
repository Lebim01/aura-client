import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import "@api";
import "@/hooks/axios";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <SessionProvider session={session}>
      <main className={`${jakarta.variable} font-jakarta`}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />
          <style>
            {`
          main::before {
            content: '';
            position: fixed; /* Fijo respecto a la ventana del navegador */
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('ruta/a/tu/imagen/aura.jpg'); /* Ajusta la ruta de tu imagen */
            background-size: cover;
            background-repeat: no-repeat;
            z-index: -1;
          }

          @media (min-width: 768px) {
            main::before {
              background-image: url('ruta/a/tu/imagen/auradesktop.jpg'); 
            }
          }
        `}
          </style>
        </Head>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
