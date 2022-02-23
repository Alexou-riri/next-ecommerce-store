import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import { css } from '@emotion/react';

const pageContainer = css`
  /* min-height: 100vh;
  display: flex;
  flex-direction: column; */
`;

export default function Layout(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main css={pageContainer}>{props.children}</main>

      <Footer />
    </div>
  );
}
