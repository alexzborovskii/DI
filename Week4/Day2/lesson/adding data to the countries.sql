-- update actors set country_id = 2 where first_name = 'Matt';

-- select id from country where name = 'USA';

-- update actors set country_id = (select id from country where name = 'USA') where first_name = 'George';

-- update actors set country_id = (select id from country where name = 'Britain') where first_name = 'Brad';

-- update actors set country_id = (select id from country where name = 'USA') where actor_id > 5 and first_name != 'Lea';

-- update actors set country_id = (select id from country where name = 'France') where first_name = 'Lea';
-- update actors set country_id = (select id from country where name = 'Britain') where first_name = 'Brad';
-- update actors set country_id = (select id from country where name = 'Britain') where first_name = 'Patrick';




