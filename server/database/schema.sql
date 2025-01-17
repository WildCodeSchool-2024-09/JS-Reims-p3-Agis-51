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
VALUES
  (1,"passeport", "driving license" );
 

