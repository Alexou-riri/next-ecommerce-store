import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import housesDatabase from '../../util/database';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

export default function SingleHouse(props) {
  function toggleHouseAdd(id) {
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
      newCookie = cookieValue.filter((cookieObject) => {
        return cookieObject.id !== id;
      });
    } else {
      // whennid is not in the array => add item
      newCookie = [...cookieValue, { id: id }];
    }
    // 3 set the new value of the cookie
    setParsedCookie('addedHouse', newCookie);
  }

  // const [addedHouse, setaddedHouse] = useState(props.house);
  const addedHouse = [{ id: '1' }, { id: '2' }];
  const houseIsAdded = addedHouse.some((AddedObject) => {
    return AddedObject.id === props.house.id;
  });

  return (
    <Layout>
      <Head>
        <title>Products</title>
        <meta description="A list of products" />
      </Head>
      <h1>Description</h1>
      <h1>{props.house.name}</h1>
      <Image
        src={`/public/Images/${props.house.id}.jpg`}
        width="300"
        height="300"
      />
      <div>{props.house.type}</div>
      <p>vdsvds</p>

      <button onClick={() => toggleHouseAdd(props.house.id)}>
        {' '}
        Add on cart
      </button>
      {/* <div>{props.description}</div> */}
    </Layout>
  );
}

export function getServerSideProps(context) {
  const houseId = context.query.houseId;
  console.log('db', housesDatabase);

  const matchingHouse = housesDatabase.find((house) => {
    if (house.id === houseId) {
      return true;
    } else {
      return false;
    }
  });

  const addedHouseOncookies = context.req.cookies.addedHouse || [];
  console.log(addedHouseOncookies);

  return {
    props: {
      addedHouse: [{ id: 1 }, { id: 2 }],
      house: matchingHouse,
    },
  };
}
