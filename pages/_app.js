import Head from "next/head";
import { Layout } from "@/components";
import "@/styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jam in the Jam Lounge</title>{" "}
      </Head>
      <div className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
