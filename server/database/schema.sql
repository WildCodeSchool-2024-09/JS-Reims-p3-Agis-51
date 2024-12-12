create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

insert into user(id, email, password)
values
  (1, "jdoe@mail.com", "123456");

insert into item(id, title, user_id)
values
  (1, "Stuff", 1),
  (2, "Doodads", 1);

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
  id_Card varchar (100), 
  drivers_license varchar(50)
);

insert into document(id, id_Card, drivers_license)
values
  (1,"passeport", "driving license" );
 

