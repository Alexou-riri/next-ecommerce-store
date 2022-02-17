import Head from 'next/head';
import Layout from '../components/Layout';

export default function ThankYou() {
  return (
    <Layout>
      <Head>
        <title>Thank you</title>
      </Head>
      <h1>
        Thank you for your order. Your keys will be delivered in max 7 days.
      </h1>
    </Layout>
  );
}
