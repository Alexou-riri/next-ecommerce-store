import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
export default function About() {
  return (
    <>
      <div>
        <Head>
          <title>House Of Castles</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Header />
        <h1>About this eshop</h1>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
