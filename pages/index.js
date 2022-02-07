import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import Link from 'next/link';
// import Header from '../components/Header';
import Layout from '../components/Layout';
import { css } from '@emotion/react';

const background = css`
  background-image: url('./Images/archi.jpeg');
  background-position: center;
  width: 100vw;
  height: 85vh;
  //width: auto;
  box-sizing: border-box;
  margin-left: 0;
  border: 1px solid black;
  object-fit: fill;
`;

export default function Home() {
  return (
    <div className="container">
      <Layout>
        <Head>
          <title>House Of Castles</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <main css={background}>
          <div>
            <h1>Choose your dream house </h1>

            <div>
              <label>
                min superficy
                <input value="superficy" />
              </label>
              <label>
                max price
                <input value="price" />
              </label>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
