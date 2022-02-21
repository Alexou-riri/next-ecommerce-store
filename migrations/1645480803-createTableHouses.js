exports.up = async (sql) => {
  await sql`
	 CREATE TABLE houses (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(40) NOT NULL,
  type varchar(20) NOT NULL,
  image varchar(100) NOT NULL,
  price integer NOT NULL,
  description varchar(700) NOT NULL
);
`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE houses
	`;
};
