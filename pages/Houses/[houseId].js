import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import housesDatabase from '../../util/database';

export default function SingleHouse(props) {
  return (
    <Layout>
      <Head>
        <title>Products</title>
        <meta description="A list of products" />
      </Head>
      <h1>Description</h1>
      <div>{props.name}</div>
      <Image
        src={`/public/Images/${props.house.id}.jpg`}
        width="300"
        height="300"
      />
      <div>{props.type}</div>
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

  return {
    props: {
      house: matchingHouse,
    },
  };
}
