import Head from 'next/head';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getHouses } from '../util/database';
import { getParsedCookie, setParsedCookie } from '../util/cookies.js';
import { css } from '@emotion/react';

const cart = css`
  margin-left: 40px;
  margin-top: 40px;
  margin-bottom: 300px;

  a {
    //color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: flex;
    justify-content: center;
    //display: inline-block;
    padding: 15px 20px;
    position: relative;
    margin-left: 540px;
    margin-right: 540px;
    padding-top: 100px;
    //border: 1px solid black;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: rgba(49, 27, 1, 0.31);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
`;

const product = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 100px;
`;

const single = css`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding-bottom: 40px;
  /* border: 1px solid black;
  border-radius: 20px; */
`;

export default function Cart(props) {
  const [cartList, setCartList] = useState(props.addedHouse);
  const cookieValue = getParsedCookie('addedHouse') || [];
  const newCookie = cookieValue.map((cookieObject) => {
    function findHouse() {
      for (const singleHouse of props.houses) {
        if (singleHouse.id === cookieObject.id) {
          return {
            ...cookieObject,
            name: singleHouse.name,
            price: singleHouse.price,
          };
        }
      }
    }
    return findHouse();
  });
  setParsedCookie('addedHouse', newCookie);

  const totalPrice = newCookie.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.items;
  }, 0);

  function removeProductFromCart(id) {
    const cartValue = getParsedCookie('addedHouse') || [];

    const updatedCookie = cartValue.filter(
      (cookieObject) => cookieObject.id !== id,
    );

    setParsedCookie('addedHouse', updatedCookie);
    setCartList(updatedCookie);
  }

  return (
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

      <title>Cart</title>
      <div css={cart}>
        <h2>Your Cart</h2>
        <div css={product}>
          {newCookie.map((singleProduct) => {
            const subTotal = singleProduct.price * singleProduct.items;
            return (
              <div css={single} key="" data-test-id="cart-product-<product id>">
                <div>name: {singleProduct.name}</div>
                <div>price: {singleProduct.price} </div>
                <div>quantity: {singleProduct.items}</div>
                <div>Subtotal: {subTotal}</div>

                {/* <button
                  id={singleProduct.id}
                  onClick={(e) => {
                    setProductCart(deleteProduct(product.id));
                  }}
                >
                  one less?
                </button> */}
              </div>
            );
          })}
        </div>
        <div data-test-id="cart-total">Total Price: {totalPrice}</div>

        <p>shipping</p>
        <Link href="/checkout" data-test-id="cart-checkout">
          <a> Checkout</a>
        </Link>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const addedHouseOncookies = context.req.cookies.addedHouse || '[]';
  const addedHouse = JSON.parse(addedHouseOncookies);

  const houses = await getHouses();

  return {
    props: {
      addedHouse,
      houses,
    },
  };
}
