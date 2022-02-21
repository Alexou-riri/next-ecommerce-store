import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { css } from '@emotion/react';

const titre = css`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  margin-top: 40px;
`;

const text = css`
  margin-bottom: 400px;
`;

export default function About() {
  return (
    <>
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
        <Header />
        <h1 css={titre}>About this eshop</h1>
        <div css={text}>
          <p>
            Finding a house can be complicated.
            <br />
            With our team of talented real estate agent, you will find your
            perfect house.
          </p>
          <p>
            Intelligentsia flannel subway tile post-ironic, 8-bit velit art
            party sartorial gluten-free woke beard cliche brunch proident sunt.
            Crucifix waistcoat culpa glossier banh mi, pariatur neutra blog. You
            probably haven't heard of them intelligentsia beard venmo, put a
            bird on it dolore la croix mustache try-hard semiotics raw denim man
            bun meditation. Flannel pour-over salvia ut 8-bit. Jianbing photo
            booth proident lomo four loko. Literally fugiat hexagon semiotics
            quinoa, consequat pitchfork chambray. Pickled cloud bread
            reprehenderit minim lomo salvia ex post-ironic, cornhole biodiesel
            roof party messenger bag. Man bun flannel occaecat street art
            exercitation. Iceland pinterest quis food truck meditation. <br />
            Exercitation deep v non tumblr street art poutine excepteur photo
            booth freegan ennui ut post-ironic ullamco palo santo. Shaman celiac
            copper mug air plant pickled kitsch typewriter unicorn magna yr palo
            santo bicycle rights ramps. Glossier etsy gluten-free, food truck
            meditation art party nulla 8-bit kombucha taxidermy VHS. Four dollar
            toast dolore direct trade enamel pin bushwick, cupidatat cloud bread
            sartorial dolore gastropub venmo locavore vexillologist.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
