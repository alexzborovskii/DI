-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)


-- SELECT * FROM SecondTab




-- -- 1 - 0, because subquery = null

-- SELECT COUNT(*) 
--     FROM FirstTab 
-- 	AS ft 
-- 	WHERE ft.id NOT IN 
-- 		( SELECT id FROM SecondTab WHERE id IS NULL )


-- -- 2 - 2. everything except 5 and null
-- SELECT COUNT(*) 
--     FROM FirstTab AS ft 
-- 	WHERE ft.id NOT IN 
-- 		( SELECT id FROM SecondTab WHERE id = 5 )

-- -- 3 - 0, because there is null in sabquery
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- -- 4  - 2. everything except 5 and null
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft 
-- WHERE ft.id NOT IN 
-- 	( SELECT id FROM SecondTab WHERE id IS NOT NULL )