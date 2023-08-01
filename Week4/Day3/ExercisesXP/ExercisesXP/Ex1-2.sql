-- -- -- Exercise 1

-- -- 1
-- select name from language

-- -- 2
-- select film.title, film.description, language.name
-- 1
-- from film
-- left join language 
-- on film.language_id = language.language_id
-- 2
-- from film
-- right join language 
-- on film.language_id = language.language_id

-- -- 3
-- create table new_film (
-- 	id serial primary key,
--   	name varchar(50));
--
-- insert into new_film (name) values
-- ('Barbie'), ('Oppenheimer');

-- -- 4
-- create table customer_review (
-- 	review_id serial primary key ,
-- 	film_id int references new_film(id) on delete cascade,
-- 	language_id int references language (language_id),
-- 	title varchar (100),
-- 	score smallint check(between 1 and 10) not null,
-- 	review_text text,
-- 	last_update date	
-- 	)

-- -- 5
-- insert into customer_review (film_id, language_id, title, score, review_text, last_update) values
-- (1, 1, '2 tickets please', 8, 'Watched it with the hole family. Love it soooo much', '2023-07-30'),
-- (2, 1, 'Pink too much', 4, 'Loved barbies since childhood. Movie is a little bit worse then dolls', '2023-07-29')

-- -- 6 
-- delete from new_film where id = 1 -- review also deleted



-- -- -- Exercise 2
-- -- 1
-- update film set language_id = 2 where film_id = 2;
-- update film set language_id = 4 where film_id = 5;

-- -- 2
-- customer_address_id - FK
-- first look for the address in address table, if exists - just take id, if not - create address, then take this new addresses id

-- -- 3
-- easy step

-- -- 4
-- select count(*) from rental where return_date is null and rental_date is not null; 

-- -- 5
-- select * from rental
-- inner join inventory on rental.inventory_id = inventory.inventory_id
-- left join film on inventory.film_id = film.film_id
-- where rental.return_date is null and rental_date is not null
-- order by film.rental_rate desc
-- limit 30

-- -- 6
-- 1
-- select film.film_id, film.title, film.fulltext 
-- from film_actor
-- inner join film on film.film_id = film_actor.film_id
-- where actor_id = 
-- 	  (select actor_id from actor where (first_name = 'Penelope' and last_name = 'Monroe'))
-- 	   and film.description ilike '%sumo%'

-- 2
-- select film.title from film
-- inner join film_category on film.film_id = film_category.film_id
-- INNER JOIN category on category.category_id = film_category.category_id
-- where length < 60 and rating = 'R' and category.name = 'Documentary'

-- 3
-- select film.title, payment.amount, customer.first_name, customer.last_name from film
-- join inventory on film.film_id = inventory.film_id
-- join rental on inventory.inventory_id = rental.inventory_id
-- join payment on rental.rental_id = payment.rental_id
-- join customer on customer.customer_id = payment.customer_id
-- where payment.amount > 4 and 
-- customer.first_name = 'Matthew' and 
-- customer.last_name = 'Mahan'
-- and rental.return_date between '2005-07-28' and '2005-08-01'

--4
-- select film.title, film.replacement_cost, customer.first_name, customer.last_name, film.description from film
-- join inventory on film.film_id = inventory.film_id
-- join rental on inventory.inventory_id = rental.inventory_id
-- join payment on rental.rental_id = payment.rental_id
-- join customer on customer.customer_id = payment.customer_id
-- where film.title ilike '%boat%' or film.description ilike '%boat%' and  
-- customer.first_name = 'Matthew' and 
-- customer.last_name = 'Mahan'
-- order by film.replacement_cost desc