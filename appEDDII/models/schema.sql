DROP DATABASE IF EXISTS MisDatos;

CREATE DATABASE IF NOT EXISTS MisDatos;

USE MisDatos;

CREATE TABLE IF NOT EXISTS usuarios (
  usuario_id int NOT NULL,
  nombre varchar(255) NOT NULL,
  Anio int NOT NULL,
  hobbies varchar(255),
  lenguajes varchar(255),
  contrasenia varchar(255) NOT NULL,
  PRIMARY KEY(usuario_id)
);

CREATE TABLE IF NOT EXISTS proyectos (
  proyecto_id int NOT NULL,
  clase varchar(255) NOT NULL,
  nombre varchar(255) NOT NULL,
  descripcion varchar(255) NOT NULL,
  imagen varchar(255) NOT NULL,
  usuario_id int FOREIGN KEY REFERENCES usuarios(usuario_id)
);
