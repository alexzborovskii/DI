-- CREATE TABLE producers (
-- id serial primary key,
-- producer_first_nam varchar(50),
-- producer_last_name varchar(50),
-- producer_country_id int references country(id)
-- )

-- create table movies_producers (
-- id serial primary key,
-- producer_id int references producers(id),
-- movie_id smallint references movie(id));

-- insert into producers (producer_first_nam, producer_last_name, producer_country_id) values
-- ('Harvey', 'Veinshtein', (select id from country where name = 'USA')),
-- ('Pete', 'Peterson', (select id from country where name = 'Britain'));

-- insert into movies_producers (producer_id, movie_id) values
-- ((select id from producers where producer_first_nam = 'Pete'), (select id from movie where title = 'Good Will Hunting')),
-- ((select id from producers where producer_first_nam = 'Harvey'), (select id from movie where title = 'Good Will Hunting')),
-- ((select id from producers where producer_first_nam = 'Harvey'), (select id from movie where title = 'Oceans Twelve')),
-- ((select id from producers where producer_first_nam = 'Pete'), (select id from movie where title = 'Oceans Twelve'));


select movie.title, producers.first_nam, producers.last_name
from movie
inner join movies_producers on movie