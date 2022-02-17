-- Create table

CREATE TABLE houses (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(40) NOT NULL,
  type varchar(20) NOT NULL,
  image varchar(100) NOT NULL,
  price integer NOT NULL,
  description varchar(700) NOT NULL
);


-- inserting a house
INSERT INTO houses
(name, type, image, price, description)
VALUES

('Chambord', 'Real', '/Images/chambord.jpg', 1000000, 'gdnksngvpfdn' ),

('Chenonceau', 'Real', '/Images/chenonceau.jpg', 800000, 'gdnksngvpfdn' ),

('Disney', 'Unreal','/Images/disney.jpg',1200000, 'gdnksngvpfdn' ),

('Kings Landing', 'Unreal', '/Images/Kings_Landing.webp', 2000000, 'Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...'),

('Neuschwanstein', 'Real','/Images/neuschwanstein.jpeg', 900000, 'gdnksngvpfdn'),

(' Schoenbrunn', 'Real','/Images/schoenbrunn.jpg', 1200000, 'gdnksngvpfdn' )
;

-- read
SELECT * FROM houses;