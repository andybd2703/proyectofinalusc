-- Crear la base de datos 'usc'
CREATE DATABASE usc;

-- Seleccionar la base de datos 'usc'
USE usc;

-- Crear la tabla 'usuarios'
CREATE TABLE usuarios (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(50) NOT NULL,
    numero_documento VARCHAR(20) NOT NULL,
    estamento VARCHAR(50) NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
