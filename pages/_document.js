import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Get ready to jam out with Jam in the Jam Lounge, a 100% live-looping one man jam band music project! Join me, Jam, the one-man jam band, as I craft live looping instrumental jam sessions using an array of musical instruments, including guitar, bass, keyboards, theremins, drum machines, loop stations, and a ton of effects pedals! Experience a fusion of psychedelic, surfer rock, indie vibes, vaporwave, and global influences in every live performance. Welcome to Jam in the Jam Lounge!"
          />
          <link
            rel="shortcut icon"
            href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}
          />
        </Head>
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
