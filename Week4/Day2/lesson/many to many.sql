-- create table movie (
-- id serial primary key,
-- title varchar(50) not null,
-- country_id smallint references country(id)
-- );

-- insert into movie (title, country_id)
-- values ('Good Will Hunting', (select id from country where name = 'USA')),
-- ('Jason Bourne', (select id from country where name = 'USA')),
-- ('Oceans Twelve', (select id from country where name = 'Britain')),
-- ('Oceans 8', (select id from country where name = 'Britain'));
		
		
-- create table actors_movies (
-- id serial primary key,
-- 	actor_id int references actors(actor_id),
-- 	movie_id smallint references movie(id)
-- );

insert into actors_movies (actor_id, movie_id) values
((select actor_id from actors where first_name = 'Matt'), (select id from movie where title = 'Good Will Hunting')),
((select actor_id from actors where first_name = 'Matt'), (select id from movie where title = 'Jason Bourne')),
((select actor_id from actors where first_name = 'Matt'), (select id from movie where title = 'Oceans Twelve')),
((select actor_id from actors where first_name = 'Matt'), (select id from movie where title = 'Oceans 8')),
((select actor_id from actors where first_name = 'George'), (select id from movie where title = 'Oceans 8'));