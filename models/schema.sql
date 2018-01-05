DROP DATABASE IF EXISTS AnthologySystems;

CREATE DATABASE IF NOT EXISTS AnthologySystems;

Use AnthologySystems;

/* DATOS PARA LOS USUARIOS */

CREATE TABLE IF NOT EXISTS users (
  username VARCHAR(255) PRIMARY KEY,
  password VARCHAR(255),
  image VARCHAR(255),
  completeName VARCHAR(125),
  email VARCHAR(70),
  career VARCHAR(95)
);

CREATE TABLE IF NOT EXISTS languages (
  language VARCHAR(70),
  percentage INT,
  username VARCHAR(255),
  FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE IF NOT EXISTS education (
  institute VARCHAR(255),
  description VARCHAR(255),
  MyDate DATE,
  username VARCHAR(255),
  FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE IF NOT EXISTS skills (
  title VARCHAR(255),
  percentage INT,
  username VARCHAR(255),
  FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE IF NOT EXISTS workExperience(
  company VARCHAR(255),
  ocupation VARCHAR(90),
  MyDate DATE,
  username VARCHAR(255),
  FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE IF NOT EXISTS singleProyect (
  title VARCHAR(255),
  description VARCHAR(255),
  MyDate DATE,
  username VARCHAR(255),
  url VARCHAR(255),
  FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE IF NOT EXISTS groupProyect (
  title VARCHAR(255) PRIMARY KEY,
  description VARCHAR(255),
  MyDate DATE,
  url VARCHAR(255),
);

CREATE TABLE IF NOT EXISTS infoUserProyect (
  titleProyect VARCHAR(255),
  username VARCHAR(255),
  FOREIGN KEY (titleProyect) REFERENCES groupProyect(title),
  FOREIGN KEY (username) REFERENCES users(username)
);
