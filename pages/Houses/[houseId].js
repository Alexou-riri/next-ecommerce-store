import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import housesDatabase from '../../util/database';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

export default function SingleHouse(props) {
  const [addedArray, setAddedArray] = useState(props.addedHouse);
  const currentHouseObject = addedArray.find(
    (cookieObject) => cookieObject.id === props.house.id,
  );

  function numberCountUp() {
    console.log('add one more');
    // get the current cookie value
    const cookieValue = JSON.parse(Cookies.get('addedHouse') || '[]');
    // update the value + 1
    const newCookie = cookieValue.map((cookieObject) => {
      if (cookieObject.id === props.house.id) {
        return { ...cookieObject, numbers: cookieObject.number + 1 };
      } else {
        return cookieObject;
      }
    });
    // update cookie and state
    setAddedArray(newCookie);
    Cookies.set('addedHouse', JSON.stringify(newCookie));
  }

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
      newCookie = [...cookieValue, { id: id, number: 1 }];
    }
    // 3 set the new value of the cookie
    setAddedArray(newCookie);
    setParsedCookie('addedHouse', newCookie);
  }

  // const [addedHouse, setaddedHouse] = useState(props.house);
  const addedHouse = [{ id: '1' }, { id: '2' }];
  const houseIsAdded = addedArray.some((AddedObject) => {
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

      <button onClick={() => numberCountUp()}>
        Add one more {currentHouseObject ? currentHouseObject.number : 'Blue'}
      </button>
      <button onClick={() => toggleHouseAdd(props.house.id)}>
        {houseIsAdded ? 'yes' : 'no not added'}
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
    return house.id === houseId;
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
