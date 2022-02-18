import Link from 'next/link';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getParsedCookie, setParsedCookie } from '../util/cookies.js';
import { getProductCart } from '../util/cookies';
// import logoipsum from ' ./public/Images/logoipsum.svg';

const headerStyles = css`
  background: rgba(49, 27, 1, 0.31);
  padding: 10px;
  padding-right: 40px;
  display: flex;
  justify-content: flex-end;
  margin-top: 0;
  position: static;

  a + a {
    margin-left: 20px;
    cursor: pointer;
    transition: transform 0.2s ease-out;
  }
  a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }

  img {
    /* display: flex;
    justify-content: flex-start; */
    margin-right: auto;
  }
`;

// const { cart } = useState;

export default function Header() {
  const cookieValue = getParsedCookie('cart') || [];
  console.log('CookieValue', cookieValue);
  const totalQuantity = cookieValue.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.items;
  }, 0);
  console.log('totalQuantity', totalQuantity);
  // const productCart = getProductCart();
  // const [itemQuantity, setItemQuantity] = useState(null);
  // useEffect(() => {
  //   setItemQuantity(productCart.length);
  // }, [productCart]);

  // const [sumCartItems, setSumCartItems] = useState(0);
  // const currentCookies = getParsedCookie('cart');
  // console.log('current cookie', currentCookies);
  // useEffect(() => {
  //   if (currentCookies !== undefined) {
  //   }
  // });

  return (
    <header css={headerStyles}>
      <img src="/logoipsum.svg" alt="logo" />
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/products">
          {/* <select></select> */}
          <a data-test-id="products-link">Products</a>
        </Link>
        {/* menu deroulant? */}
        <Link href="/cart">
          {/* {cart.cartItems.length > 0 ? } */}
          <a>Cart - {totalQuantity}</a>
        </Link>
      </p>
    </header>
  );
}

export function getServerSideProps(context) {
  const cartOnCookies = context.req.cookies.cart || '[]';
  const cart = JSON.parse(cartOnCookies);

  return {
    props: {
      addedHouse: cart,
    },
  };
}
