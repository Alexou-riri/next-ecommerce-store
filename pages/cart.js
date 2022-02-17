import Head from 'next/head';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import housesDatabase from '../util/database';
import { getParsedCookie, setParsedCookie } from '../util/cookies.js';

export default function Cart(props) {
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

        <title>Cart</title>

        <h2>Your Cart</h2>
        <div>
          {newCookie.map((singleProduct) => {
            const subTotal = singleProduct.price * singleProduct.items;
            return (
              <div key="">
                <div>name:{singleProduct.name}</div>
                <div>price: {singleProduct.price} </div>
                <div>quantity:{singleProduct.items}</div>
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
          ;<div>Total Price: {totalPrice}</div>
        </div>

        <p>shipping</p>
        <Link href="/checkout">
          <a> Checkout</a>
        </Link>
      </div>
    </Layout>
  );
}
export function getServerSideProps(context) {
  const addedHouseOncookies = context.req.cookies.addedHouse || '[]';
  const addedHouse = JSON.parse(addedHouseOncookies);
  return {
    props: {
      addedHouse,
      houses: housesDatabase,
    },
  };
}
