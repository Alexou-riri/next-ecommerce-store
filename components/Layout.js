import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title></title>
      </Head>
      <Header />
      <main>{props.children}</main>

      <Footer />
    </div>
  );
}
