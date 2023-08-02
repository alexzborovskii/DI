create table country (
	country_id serial primary key,
	country_name varchar (50)
);

create table capital (
	capital_id serial primary key,
	capital_name varchar (50),
	country_id int unique foreign key on country (country_id)
);

create table additional_info (
	info_id serial primary key,
	country_id int unique foreign key on country (country_id),
	flag varchar (100),
	subregion varchar (100),
	population int
)