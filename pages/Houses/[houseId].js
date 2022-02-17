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
      <Link href="/products">
        <a> Back to the houses</a>
      </Link>
      <h1>Description</h1>
      <h1>{props.house.name}</h1>
      <img
        src={props.house.image}
        alt="the house"
        height="700px"
        width="1200px"
      />
      <div>{props.house.type}</div>
      <div data-test-id="product-price">Price : ${props.house.price}</div>
      <p>vdsvds</p>
      <div>
        <p>vdsvdsgfd</p>

        <button onClick={() => toggleHouseCart(props.house.id)}>
          {houseIsAdded
            ? ' - is added - Remove from Cart'
            : ' - not added - Buy it !'}
        </button>
        {currentHouseObject && (
          <div>
            <button onClick={() => addProduct(props.house.id)}>
              Buy one more
            </button>
            {currentHouseObject.items}
            <button onClick={() => removeProduct()}>too many?</button>
          </div>
        )}
      </div>

      {/* <div>{props.description}</div> */}
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
