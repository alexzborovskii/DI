-- -- -- part1 -- -- --

-- 1
-- create table customer (
-- 	id serial primary key,
-- 	first_name varchar(50),
-- 	last_name varchar(50) NOT NULL
-- );
-- create table customer_profile (
-- 	id serial primary key,
-- 	isLoggedIn bool default false,
-- 	customer_id int unique references customer (id)
-- );

-- 2
-- insert into customer (first_name, last_name) values
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')

-- 3
-- insert into customer_profile (isloggedin, customer_id) values
-- ('true', (select id from customer where first_name = 'John')),
-- ('false', (select id from customer where first_name = 'Jerome'));

-- 4
--1
-- select customer.first_name from customer
-- right join customer_profile
-- on customer.id = customer_profile.customer_id
-- where customer_profile.isloggedin = 'true'
--2
-- select customer.first_name, isloggedin from customer
-- full join customer_profile
-- on customer.id = customer_profile.customer_id
--3
-- select count(*) from customer
-- full join customer_profile
-- on customer.id = customer_profile.customer_id
-- where customer_profile.isloggedin = 'false' 
-- 	or customer_profile.isloggedin is null

-- -- -- part2 -- -- --
-- 1
-- create table book (
-- 	book_id serial primary key,
-- 	title varchar (50) not null,
-- 	author varchar (50) not null
-- )

-- 2
-- insert into book (title, author) values
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee')

-- 3
-- create table student (
-- 	student_id SERIAL PRIMARY KEY, 
-- 	name varchar (50) UNIQUE NOT NULL,
-- 	age int check (age <= 15)
-- )

-- 4
-- insert into student (name, age) values
-- 	('John', 12),
-- 	('Lera', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14);

-- 5
-- create table library (
-- 	book_fk_id int  references book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	student_fk_id int references student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	borrowed_date date,
-- 	constraint PK_library primary key (book_fk_id, student_fk_id)
-- 	)

-- 6
-- insert into library values
-- 	((select book_id from book where title = 'Alice In Wonderland'),
--  	(select student_id from student where name = 'John'),  
-- 	 '15/02/2022'),
-- 	((select book_id from book where title = 'To kill a mockingbird'),
--  	(select student_id from student where name = 'Bob'),  
-- 	 '03/03/2021'),
-- 	((select book_id from book where title = 'Alice In Wonderland'),
--  	(select student_id from student where name = 'Lera'),  
-- 	 '23/05/2021'),
-- 	((select book_id from book where title = 'Harry Potter'),
--  	(select student_id from student where name = 'Bob'),  
-- 	 '12/08/2021')
	 
-- 7
--1
-- select * from library;
--2
-- select student.name, book.title
-- from library
-- join student on student.student_id = library.student_fk_id
-- join book on book.book_id = library.book_fk_id
--3
-- select avg(student.age)
-- from library
-- join student on student.student_id = library.student_fk_id
-- join book on book.book_id = library.book_fk_id
-- where title = 'Alice In Wonderland'
--4
-- delete from student where name = 'Lera'; 
-- -- data about student deletes cascade also from library

