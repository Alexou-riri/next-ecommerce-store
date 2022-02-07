import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Cart() {
  return (
    <Layout>
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

        <h1>Confirm your cart</h1>
      </div>
      <div></div>
    </Layout>
  );
}
