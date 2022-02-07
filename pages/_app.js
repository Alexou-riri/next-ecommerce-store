// import '../styles/globals.css';
import Head from 'next/head';
import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>House Of Castles</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Global
        styles={css`
          body {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
