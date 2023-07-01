import "@/styles/globals.css";
import Head from "next/head";
import { Outfit } from "next/font/google";

const outfit = Outfit({ weight: ["300", "500"], subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Entertainment</title>
      </Head>
      <main className={outfit.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}