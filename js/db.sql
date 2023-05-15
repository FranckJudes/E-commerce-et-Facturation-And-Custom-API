CREATE DATABASE GestionStock;

use GestionStock;

CREATE TABLE user
(
    id int AUTO_INCREMENT,
    fisrtname VARCHAR(250) NOT NULL,
    lastname VARCHAR(250) NOT NULL,
    adresse VARCHAR(250) NOT NULL,
    numero  BIGINT(15) NULL,
    password VARCHAR(250) NOT NULL,
    IsAdmin BOOLEAN DEFAULT false,
   
    PRIMARY KEY(id);
);


CREATE TABLE  commande
(
    id_commade  int AUTO_INCREMENT
)