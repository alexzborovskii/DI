-- inner join

select actors.first_name, actors.last_name, country.name
from actors
join country
on actors.country_id = country.id
order by actors.first_name
;


