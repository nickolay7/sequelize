create table races (
	id SERIAL,
	name VARCHAR(50),
	location VARCHAR(50),
	date DATE,
	created_at DATE,
	updated_at DATE
);
insert into races (id, name, location, date, created_at, updated_at) values (1, 'races1', 'China', '6/8/2021', '6/1/2021', '12/2/2020');
insert into races (id, name, location, date, created_at, updated_at) values (2, 'races2', 'Macedonia', '7/9/2021', '5/3/2021', '7/4/2021');
insert into races (id, name, location, date, created_at, updated_at) values (3, 'races3', 'Indonesia', '8/10/2021', '6/5/2021', '10/6/2021');
insert into races (id, name, location, date, created_at, updated_at) values (4, 'races4', 'Kazakhstan', '9/11/2021', '11/7/2021', '12/8/2021');
insert into races (id, name, location, date, created_at, updated_at) values (5, 'races5', 'China', '10/12/2021', '3/9/2021', '4/10/2021');
