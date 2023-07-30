-- CREATE TABLE house_expenses(
-- id serial primary key,
-- date_paid date,
-- electricity float,
-- water float,
-- paid_by varchar(50)
-- );

INSERT INTO house_expenses (date_paid, electricity, water, paid_by)
VALUES ('2023-06-09', 25.44, 23.95, 'Carla'),
('2023-07-29', 54.12, 12.95, 'Cox'),
('2023-05-30', 12.65, 23.23, 'Cleaner'),
('2023-06-01', 17.34, 23.83, 'Pierce'),
('2023-06-02', 94.12, 73.29, 'Eliot');

-- SELECT * form house_expenses;
-- SELECT electricity from house_expenses;
-- SELECT water, electricity FROM house_expenses;

-- SELECT * from house_expenses Where id = 1 or id = 2;
-- SELECT * from house_expenses Where id < 3;
-- SELECT * from house_expenses Where id in (1, 2);

-- SELECT * from house_expenses Where id >= 4 order by id desc;


-- SELECT COUNT(Paid_by) FROM house_expenses WHERE Paid_by = 'JD';

-- 
-- SELECT max(water) FROM house_expenses;
-- SELECT min(electricity) as minimum_electricity FROM house_expenses;
-- SELECT AVG(electricity) FROM house_expenses Where paid_by != 'Cox';
-- SELECT AVG(electricity + water) as average_sum from house_expenses where paid_by != 'Cox';


-- SELECT paid_by FROM house_expenses group by paid_by  ORDER BY paid_by;
-- Select count(paid_by), paid_by FROM house_expenses group by paid_by;

-- SELECT paid_by, max(sum(water, electricity) FROM house_expenses group by paid_by;

-- SELECT paid_by, sum(electricity + water), max(electricity+water) from house_expenses group by paid_by;
-- select paid_by, max(water + electricity) from house_expenses group by paid_by;


-- UPDATE house_expenses
-- SET paid_by = 'Tod'
-- WHERE id = 1;

-- UPDATE house_expenses
-- SET electricity = 0
-- WHERE paid_by = 'Cleaner';

-- DELETE FROM house_expenses WHERE electricity < 50 or date_paid < '2019-06-06';






-- select * from house_expenses;