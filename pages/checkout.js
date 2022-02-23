import Head from 'next/head';

import Link from 'next/link';
import Layout from '../components/Layout';

export default function checkout() {
  return (
    <div>
      <Head>
        <title>House of Castles</title>
      </Head>
      <Layout>
        <h1>Checkout</h1>
        <h2>please entere your personal information</h2>
        <label data-test-id="checkout-first-name">
          First Name
          <input required />
        </label>

        <p>Last Name</p>
        <input required />
        <p>Email</p>
        <input required />
        <h2>please entee your address</h2>
        <p>address</p>
        <input required />
        <p>city</p>
        <input required />
        <p>postal code/zip</p>
        <input required />
        <p>country</p>
        <input required />
        <h2>now, let's talk money</h2>

        <div>
          <label for="creditCard">
            Card Number
            <input name="creditCard" id="creditCard" required />
          </label>
        </div>
        <div>
          <label for="cvv">
            Security Code
            <input name="cvv" id="cvv" required />
          </label>
        </div>
        <div>
          <label for="Expiration">
            Exp. (MM/YYYY)
            <input name="exp-month" id="exp-month" size="2" required />
          </label>
          <span> / </span>
          <input name="exp-year" id="exp-year" size="4" required />
        </div>
        <button>
          <Link href="/thank_you">confirm your order and get your keys</Link>{' '}
        </button>
      </Layout>
    </div>
  );
}
