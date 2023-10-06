/* eslint-disable @next/next/no-title-in-document-head */
import NavBar from "../components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Natural Sevgi</title>
        <meta name="Hostal" content="app Sevgi Sense" />
        <link rel="icon" href="/AF-Logo-Natural.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
