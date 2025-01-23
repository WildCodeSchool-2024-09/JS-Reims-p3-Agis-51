create table website_user (
  id int unsigned primary key auto_increment not null,
  name varchar (55) null,
  email varchar(255) not null unique,
  hashed_password varchar(255) not null,
  is_admin boolean not null default false
);

create table vehicle  (
  id int unsigned primary key auto_increment not null,
  type varchar(50) not null,
  energy VARCHAR(50)  NULL,
  gearbox VARCHAR(50) NULL,
  quantity INT NULL,
  available boolean not null
);

INSERT INTO vehicle(id, type, energy, gearbox, quantity, available)
VALUES
  (1, 'car', 'Unknown', 'automatic', 4, true),
  (2, 'car', 'Unknown', 'manual', 10, true),
  (3, 'bicycle', 'electric', NULL, 5, true),
  (4, 'kick scooter', 'electric', NULL, 6, true),
  (5, 'scooter', 'thermal', NULL, 5, true),
  (6, 'scooter', 'electric', NULL, 4, true);


create table document  (
  id int unsigned primary key auto_increment not null,
  id_card varchar (100), 
  driver_license varchar(50)
);

insert into document(id, id_card, driver_license)
values
  (1,"passeport", "driving license" );
 

insert into user(id,name, email, hashed_password)
values
  (1,"John Doe", "jdoe@mail.com", "$argon2id$v=19$m=19456,t=2,p=1$nz6t40CzCcijUhj3Ntpz9A$4DW+9sqLdKvj27E3JYbImIIfZAadyDGXHFiwpBHli4s");
