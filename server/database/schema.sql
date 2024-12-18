create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

insert into user(id, email, password)
values
  (1, "jdoe@mail.com", "123456");

create table vehicle  (
  id int unsigned primary key auto_increment not null,
  type varchar(50) not null,
  available boolean not null
);

insert into vehicle(id, type, available)
values
  (1, "car", true),
  (2, "motorcycle", false),
  (3,"scooter",true),
  (4,"bicycle",true),
  (5,"trotter",true);

create table document  (
  id int unsigned primary key auto_increment not null,
  id_card varchar (100), 
  driver_license varchar(50)
);

insert into document(id, id_card, driver_license)
values
  (1,"passeport", "driving license" );
 

