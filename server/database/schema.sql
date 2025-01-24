create table website_user (
  id int unsigned primary key auto_increment not null,
  firstname varchar (55) null,
  lastname varchar (55) null,
  email varchar(255) not null unique,
  phone_number varchar(20) null,
  address varchar(255) null,
  hashed_password varchar(255) not null,
  is_admin boolean not null default false
);

create table vehicle  (
  id int unsigned primary key auto_increment NOT NULL,
  famille varchar(50) NOT NULL,
  catégorie VARCHAR(100) NOT NULL,
  équipement VARCHAR(100)  NULL,
  quantité INT NULL,
  disponible boolean NOT NULL
);

INSERT INTO vehicle(id, famille, catégorie, équipement, quantité, disponible)
VALUES
  ("1", 'voiture', 'inconnu', 'boite manuelle', 10, true),
  ("2", 'vélo', 'électrique', NULL, 5, true),
  ("3", 'trottinette', 'électrique', NULL, 6, true),
  ("4", 'scooter', 'thermique', NULL, 5, true),
  ("5", 'scooter', 'électrique', NULL, 4, true);


create table document  (
  id int unsigned primary key auto_increment not null,
  id_card varchar (100), 
  driver_license varchar(50)
);

insert into document(id, id_card, driver_license)
VALUES
  (1,"passeport", "driving license" );
 

insert into website_user(id,firstname, lastname, email, phone_number, address, hashed_password)
values
  (1,"John", " Doe", "jdoe@mail.com", "1234567890", "123 rue de la paix", "$argon2id$v=19$m=19456,t=2,p=1$nz6t40CzCcijUhj3Ntpz9A$4DW+9sqLdKvj27E3JYbImIIfZAadyDGXHFiwpBHli4s");
