const housesDatabase = [
  {
    name: 'Chambord',
    type: 'Real',
    image: '/Images/chambord.jpg',
    price: 1000000,
    description: 'gdnksngvpfdn',
  },
  {
    name: 'Chenonceau',
    type: 'Real',
    image: '/Images/chenonceau.jpg',
    price: 800000,
    description: 'gdnksngvpfdn',
  },
  {
    name: 'Disney',
    type: 'Unreal',
    image: '/Images/disney.jpg',
    price: 1200000,
    description: 'gdnksngvpfdn',
  },
  {
    name: 'Kings Landing',
    type: 'Unreal',
    image: '/Images/Kings_Landing.webp',
    price: 2000000,
    description:
      'Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...',
  },
  {
    name: 'Neuschwanstein',
    type: 'Real',
    image: '/Images/neuschwanstein.jpeg',
    price: 900000,
    description: 'gdnksngvpfdn',
  },
  {
    name: ' Schoenbrunn',
    type: 'Real',
    image: '/Images/schoenbrunn.jpg',
    price: 1200000,
    description: 'gdnksngvpfdn',
  },
];

// id auto generate

exports.up = async (sql) => {
  await sql`
	INSERT INTO houses ${sql(
    housesDatabase,
    'name',
    'type',
    'image',
    'price',
    'description',
  )}
 `;
};

exports.down = async (sql) => {
  for (const house of housesDatabase) {
    await sql`
	DELETE FROM houses WHERE
	name = ${house.name} AND
	type = ${house.type} AND
	image = ${house.image} AND
	price = ${house.price} AND
	description = ${house.description}
	`;
  }
};
