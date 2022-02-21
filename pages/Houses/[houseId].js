import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { getHouseById } from '../../util/database';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';
import Link from 'next/link';
import Products from '../products';
import { addProduct } from '../../util/cookies.js';
import { css } from '@emotion/react';

const back = css`
  cursor: pointer;
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 40px;

  a {
    color: #320202;
    //text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.1em;

    //display: inline-block;
    padding: 15px 20px;
    position: relative;
    /* border: 1px solid black;
    border-radius: 10px; */
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
`;

const product = css`
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;
  column-gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }

  img {
    border: 3px black solid;
    margin-bottom: 30px;
  }
`;

const button = css`
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  .button-35:hover {
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  }
`;

const achete = css`
  margin-top: 40px;
  /* display: inline-flex; */
`;

const qtte = css`
  font-size: 24px;
  display: flex;
`;

export default function SingleHouse(props) {
  const [cartList, setCartList] = useState(props.addedHouse);

  function toggleHouseCart(id) {
    console.log(`set the cookie to toggle the id ${id}`);
    // 1 get the value of the cookie
    const cookieValue = getParsedCookie('addedHouse') || '[]';
    console.log(cookieValue);
    // 2 update the cookie
    const existIdOnArray = cookieValue.some((cookieObject) => {
      return cookieObject.id === id;
    });

    let newCookie;
    if (existIdOnArray) {
      // when id is in the array => delete item
      newCookie = cookieValue.filter((cookieObject) => cookieObject.id !== id);
    } else {
      // whennid is not in the array => add item
      newCookie = [...cookieValue, { id: id, items: 1 }];
    }
    // 3 set the new value of the cookie
    console.log(newCookie);

    setCartList(newCookie);
    setParsedCookie('addedHouse', newCookie);
  }
  const houseIsAdded = cartList.some((AddedObject) => {
    return AddedObject.id === props.house.id;
  });

  const currentHouseObject = cartList.find(
    (cookieObject) => cookieObject.id === props.house.id,
  );

  function addProduct() {
    console.log('add one more');
    // get the current cookie value
    const cookieValue = getParsedCookie('addedHouse') || [];
    // update the value + 1
    const newCookie = cookieValue.map((cookieObject) => {
      if (cookieObject.id === props.house.id) {
        return { ...cookieObject, items: cookieObject.items + 1 };
      } else {
        return cookieObject;
      }
    });
    // update cookie and state
    setCartList(newCookie);
    setParsedCookie('addedHouse', newCookie);
  }

  function removeProduct() {
    // get the current cookie value
    const cookieValue = getParsedCookie('addedHouse') || [];
    // update the value - 1
    const newCookie = cookieValue.map((cookieObject) => {
      if (cookieObject.id === props.house.id) {
        if (cookieObject.amount === 1) {
          return cookieObject;
        }
        return { ...cookieObject, items: cookieObject.items - 1 };
      } else {
        return cookieObject;
      }
    });
    // update cookie and state
    setCartList(newCookie);
    setParsedCookie('addedHouse', newCookie);
  }

  return (
    <Layout>
      <Head>
        <title>Products</title>
        <meta description="A list of products" />
      </Head>
      <div css={back}>
        <Link href="/products">
          <a>Back to the houses</a>
        </Link>
      </div>
      <div css={product}>
        <h1>{props.house.name}</h1>
        <img
          data-test-id="product-image"
          src={props.house.image}
          alt="the house"
          height="700px"
          width="1200px"
        />
        <div>{props.house.type}</div>
        <div data-test-id="product-price">Price : {props.house.price}</div>
        <div>{props.house.description}</div>

        <div css={achete}>
          <button
            css={button}
            data-test-id="product-add-to-cart"
            onClick={() => toggleHouseCart(props.house.id)}
          >
            {houseIsAdded
              ? ' - is added - Remove from Cart'
              : ' - not added - Buy it !'}
          </button>
          {currentHouseObject && (
            <div data-test-id="product-quantity">
              <button css={button} onClick={() => addProduct(props.house.id)}>
                Buy one more
              </button>
              <div css={qtte}>{currentHouseObject.items}</div>
              <button css={button} onClick={() => removeProduct()}>
                too many?
              </button>
            </div>
          )}
        </div>

        <div>{props.description}</div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // info from the url:
  const houseId = context.query.houseId;
  // console.log('db', housesDatabase);

  // const matchingHouse = housesDatabase.find((house) => {
  //   return house.id === houseId;
  // });

  const addedHouseOncookies = context.req.cookies.addedHouse || '[]';
  const addedHouse = JSON.parse(addedHouseOncookies);
  // console.log(addedHouseOncookies);

  const house = await getHouseById(houseId);

  return {
    props: {
      addedHouse,
      // house: matchingHouse,
      house: house,
    },
  };
}
