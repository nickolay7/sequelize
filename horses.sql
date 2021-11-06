create table horses (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	breed VARCHAR(50),
	created_at DATE,
	updated_ad DATE
);
insert into horses (id, name, breed, created_at, updated_ad) values (1, 'Dark-winged trumpeter', 'McFadin', '10/2/2021', '11/3/2021');
insert into horses (id, name, breed, created_at, updated_ad) values (2, 'Impala', 'Gallehawk', '6/4/2021', '10/5/2021');
insert into horses (id, name, breed, created_at, updated_ad) values (3, 'Tarantula, salmon pink bird eater', 'Eadon', '12/5/2021', '12/6/2021');
insert into horses (id, name, breed, created_at, updated_ad) values (4, 'African bush squirrel', 'Driffill', '2/7/2021', '3/8/2021');
insert into horses (id, name, breed, created_at, updated_ad) values (5, 'Lion, southern sea', 'Whisson', '8/9/2021', '9/10/2021');
