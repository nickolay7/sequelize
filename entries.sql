create table entries (
	id SERIAL PRIMARY KEY,
	race_id SERIAL REFERENCES ,
	jockey_id SERIAL,
	horse_id SERIAL,
	create_at DATE,
	updated_at DATE
);
insert into entries (id, race_id, jockey_id, horse_id, create_at, updated_at) values (1, 1, 1, 1, '28/01/2021', '15/02/2021');
insert into entries (id, race_id, jockey_id, horse_id, create_at, updated_at) values (2, 2, 2, 2, '10/05/2021', '12/07/2021');
insert into entries (id, race_id, jockey_id, horse_id, create_at, updated_at) values (3, 3, 3, 3, '1/06/2021', '1/12/2021');
insert into entries (id, race_id, jockey_id, horse_id, create_at, updated_at) values (4, 4, 4, 4, '3/09/2021', '5/11/2021');
insert into entries (id, race_id, jockey_id, horse_id, create_at, updated_at) values (5, 5, 5, 5, '8/3/2021', '11/7/2021');
