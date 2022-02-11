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
import { css } from '@emotion/react';
// import { wrap } from 'module';

const grid = css`
  display: flex;
  align-items: center;
  margin: auto;
  padding-bottom: 20px;
  padding-top: 20px;
`;
const houseName = css`
  font-size: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 2px grey;
`;
const wrap = css`
  /* align-items: flex-start;
  flex-wrap: wrap; */
  /* flex-direction: column;
  flex-flow: column wrap; */
  border: 1px solid black;
  margin-top: 30px;
  border-radius: 20px;
  margin-left: 200px;
  margin-right: 200px;
  a {
    //color: #fff;
    //text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    //display: inline-block;
    padding: 15px 20px;
    position: relative;
    margin-left: 240px;
    margin-right: 240px;
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

  /* display: flex; */
`;

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
          <div key={`house-${house.id}`} css={wrap}>
            <Link data-test-id="product" href={`/Houses/${house.id}`}>
              <a css={houseName}>{house.name}</a>
            </Link>{' '}
            <img
              src={house.image}
              alt=" house"
              height="500px"
              width="700px"
              css={grid}
            />
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
