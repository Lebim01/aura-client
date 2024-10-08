import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
      </Head>
      <body className="hidescroll md:overflow-y-hidden ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
