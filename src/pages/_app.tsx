import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useRouter } from "next/router";
import { classNamesCustom } from "@/utils/classes";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <SessionProvider session={session}>
      <div
        className={classNamesCustom(
          "fixed inset-0 bg-aura bg-cover md:bg-cover bg-no-repeat md:bg-auradesktop",
          { "bg-black-0C": router.pathname === "/detail/[slug]" }
        )}
      ></div>
      <main className={`relative min-h-screen ${jakarta.variable}`}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />
        </Head>
        <Component {...pageProps} />

        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-9LP50R2EP0" />
        )}
      </main>
    </SessionProvider>
  );
}
