
create table vehicle  (
  id int unsigned primary key auto_increment not null,
  type varchar(50) not null,
  energy VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  available boolean not null
);

insert into vehicle(id, type, energy, quantity, available)
values
  (1, 'car', 'automatic', 4, true),
  (2, 'car', 'manual', 10, true),
  (3, 'bicycle', 'electric', 5, true),
  (4, 'kick scooter', 'electric', 6, true),
  (5, 'scooter', 'thermal', 5, true),
  (6, 'scooter', 'electric', 4, true),
  (7, 'car', 'manual', 10, true);

create table document  (
  id int unsigned primary key auto_increment not null,
  id_card varchar (100), 
  driver_license varchar(50)
);

insert into document(id, id_card, driver_license)
values
  (1,"passeport", "driving license" );
 

