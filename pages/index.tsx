import Head from 'next/head';
// import styles from '../styles/Home.module.css';
// import Link from 'next/link';
// import Header from '../components/Header';
import Layout from '../components/Layout';
import { css } from '@emotion/react';

const background = css`
  background-image: url('./Images/archi.jpeg');
  background-position: center;
  /* width: 100vw;
  height: 85vh; */
  height: 600px;
  width: 100%;
  box-sizing: border-box;
  margin-left: 0;
  border: 1px solid black;
  object-fit: contain;
`;
const meetOurTeam = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const choose = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
  // vertical align?
  text-shadow: 3px 3px 3px black;
  font-size: 30px;
  color: white;
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main css={background}>
          <div css={choose}>
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
        <div css={meetOurTeam}>
          <h2>Meet our Team</h2>
          <img
            src="pexels.jpg"
            alt="meet our team"
            height="520px"
            width="780px"
          />
        </div>
      </Layout>
    </div>
  );
}
