DROP DATABASE IF EXISTS AnthologySystems;

CREATE DATABASE IF NOT EXISTS AnthologySystems;

Use AnthologySystems;

/* DATOS PARA LOS USUARIOS */

/*
Tabla para los usuarios
*/
CREATE TABLE IF NOT EXISTS users (
  username VARCHAR(255) PRIMARY KEY,
  password VARCHAR(255),
  image VARCHAR(255),
  completeName VARCHAR(125),
  email VARCHAR(70),
  career VARCHAR(95)
);

/* Esta tabla de languages contendra los lenguajes que saben los usuarios */

CREATE TABLE IF NOT EXISTS languages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  language VARCHAR(70),
  percentage INT,
  username VARCHAR(255),
  FOREIGN KEY (username) REFERENCES users(username)
);

/* Esta tabla de education contendra los datos de la educacion de los usuarios */

CREATE TABLE IF NOT EXISTS education (
  id INT AUTO_INCREMENT PRIMARY KEY,
  institute VARCHAR(255),
  description VARCHAR(255),
  certificate VARCHAR(255) UNIQUE,
  MyDate DATE,
  username VARCHAR(255),
  FOREIGN KEY (username) REFERENCES users(username)
);

/* Esta tabla de skills contendra las habilidades de los usuarios */

CREATE TABLE IF NOT EXISTS skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  percentage INT,
  username VARCHAR(255),
  FOREIGN KEY (username) REFERENCES users(username)
);

/* Esta tabla de workExperience contendra las expreciencia de trabajos de los usuarios */

CREATE TABLE IF NOT EXISTS workExperience(
  id INT AUTO_INCREMENT PRIMARY KEY,
  company VARCHAR(255),
  ocupation VARCHAR(90),
  MyDate DATE,
  username VARCHAR(255),
  FOREIGN KEY (username) REFERENCES users(username)
);

/* Esta tabla de singleProyect contendra los proyectos individuales hechos por los usuarios */

CREATE TABLE IF NOT EXISTS singleProyect (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(255),
  img VARCHAR(255) UNIQUE,
  MyDate DATE,
  username VARCHAR(255),
  url VARCHAR(255),
  FOREIGN KEY (username) REFERENCES users(username)
);

/* Esta tabla de groupProyect contendra los proyectos grupales*/

CREATE TABLE IF NOT EXISTS groupProyect (
  title VARCHAR(255) PRIMARY KEY,
  description VARCHAR(255),
  img VARCHAR(255) UNIQUE,
  MyDate DATE,
  url VARCHAR(255)
);

/* Esta tabla infoUserProyect contendra cuales usuarios participaron en un proyecto grupal*/

CREATE TABLE IF NOT EXISTS infoUserProyect (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titleProyect VARCHAR(255),
  username VARCHAR(255),
  FOREIGN KEY (titleProyect) REFERENCES groupProyect(title),
  FOREIGN KEY (username) REFERENCES users(username)
);
