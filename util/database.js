import postgres from 'postgres';
import { config } from 'dotenv-safe';

// loads all environement variables from a .env file
// for all  code after this line
config();

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  // connect only once to the databse
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres();
  }
  const sql = globalThis.postgresSqlClient;

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export async function getHouses() {
  const houses = await sql`
  SELECT * FROM houses;
  `;
  return houses;
}

export async function getHouseById(id) {
  const [house] = await sql`
  SELECT * FROM houses WHERE id =${id};
  `;
  return house;
}

// const housesDatabase = [
//   {
//     id: '1',
//     name: 'Chambord',
//     type: 'Real',
//     image: '/Images/chambord.jpg',
//     price: 1000000,
//     description: 'gdnksngvpfdn',
//   },
//   {
//     id: '2',
//     name: 'Chenonceau',
//     type: 'Real',
//     image: '/Images/chenonceau.jpg',
//     price: 800000,
//     description: 'gdnksngvpfdn',
//   },
//   {
//     id: '3',
//     name: 'Disney',
//     type: 'Unreal',
//     image: '/Images/disney.jpg',
//     price: 1200000,
//     description: 'gdnksngvpfdn',
//   },
//   {
//     id: '4',
//     name: 'Kings Landing',
//     type: 'Unreal',
//     image: '/Images/Kings_Landing.webp',
//     price: 2000000,
//     description:
//       'Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...',
//   },
//   {
//     id: '5',
//     name: 'Neuschwanstein',
//     type: 'Real',
//     image: '/Images/neuschwanstein.jpeg',
//     price: 900000,
//     description: 'gdnksngvpfdn',
//   },
//   {
//     id: '6',
//     name: ' Schoenbrunn',
//     type: 'Real',
//     image: '/Images/schoenbrunn.jpg',
//     price: 1200000,
//     description: 'gdnksngvpfdn',
//   },
// ];

// export default housesDatabase;
