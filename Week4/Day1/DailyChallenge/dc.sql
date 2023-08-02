-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- );

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5),
-- ('George','Clooney','06/05/1961', 2),
-- ('Salma', 'Hayek', '02/09/1966', 0);

-- -- 1
-- SELECT count(first_name) from actors;

-- -- 2
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt', null,'08/10/1970', 5);
-- values should be NOT NULL