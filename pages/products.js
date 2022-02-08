import Head from 'next/head';
import Layout from '../components/Layout';
import Chambord from '../public/Images/chambord.jpg';
import Chenonceau from '../public/Images/chenonceau.jpg';
import Disney from '../public/Images/disney.jpg';
import KingsLanding from '../public/Images/Kings_Landing.webp';
import Neuschwanstein from '../public/Images/neuschwanstein.jpeg';
import Schoenbrunn from '../public/Images/schoenbrunn.jpg';
import Image from 'next/image';
import housesDatabase from '../util/database';
import Link from 'next/link';

export default function Products(props) {
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
      </div>
      <h1>Choose wisely</h1>
      {props.houses.map((house) => {
        return (
          <div key={`house-${house.id}`}>
            <Link href={`/Houses/${house.id}`}>
              <a>{house.name}</a>
            </Link>{' '}
          </div>
        );
      })}

      {/* <div>
        <h1>Chambord</h1>
        <Image src={Chambord} />
      </div>
      <div>
        <h1>Chenonceau</h1>
        <Image src={Chenonceau} />
      </div>
      <div>
        <h1>Dosney</h1>
        <Image src={Disney} />
      </div>
      <div>
        <h1>Kings Landing</h1>
        <Image src={KingsLanding} />
      </div>
      <div>
        <h1>Schönbrunn</h1>
        <Image src={Schoenbrunn} />
      </div>
      <div>
        <h1>Neuschwanstein</h1>
        <Image src={Neuschwanstein} />
      </div> */}
    </Layout>
  );
}

export function getServerSideProps() {
  // const housesDatabase = await getHouses();
  return {
    props: {
      houses: housesDatabase,
    },
  };
}
