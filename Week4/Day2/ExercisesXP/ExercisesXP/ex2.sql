--dvdrental

-- -- 1
-- select * from customer;

-- -- 2
-- select CONCAT(first_name, ' ', last_name) AS full_name from customer;

-- -- 3
-- select create_date  from customer group by create_date;

-- -- 4
-- select * from customer order by first_name desc;

-- -- 5
-- select film_id, title, description, release_year, rental_rate from film order by rental_rate asc;

-- -- 6
-- select address, phone from address where district = 'Texas';

-- -- 7
-- select * from film where film_id in (15, 150);

-- -- 8
-- select film_id, title, description, length, rental_rate from film where title = 'Hacksaw ridge';

-- -- 9
-- select film_id, title, description, length, rental_rate from film where title like 'Ha%' order by title

-- -- 10
-- select * from film order by rental_rate asc limit 10;

-- 11
-- select * from film order by rental_rate asc limit 10 offset 10;

-- -- 12
-- select customer.first_name, customer.last_name, payment.amount, payment.payment_date 
-- from customer
-- join payment
-- on customer.customer_id = payment.customer_id
-- order by payment.payment_id;

-- 13
-- select film.film_id, film.title 
-- from film 
-- where not exists
-- (select null from inventory where film.film_id = inventory.film_id)

-- -- -- OR

-- SELECT film.film_id, film.title, inventory.film_id as inventory
-- FROM film left join inventory on film.film_id = inventory.film_id
-- WHERE inventory.film_id IS NULL;

-- -- 14
-- select city.city, country.country
-- from city
-- join country
-- on city.country_id = country.country_id





