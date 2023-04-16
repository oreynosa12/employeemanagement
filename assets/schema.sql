DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50);

);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    salary DECIMAL,
    department_id INT NOT NULL,
    FOREIGN KEY(department_id)REFERENCES department(id)
    

);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (100),
    last_name VARCHAR (100),
    role_id INT NOT NULL,
    FOREIGN KEY(role_id)REFERENCES role(id),
    manager_id INT ,
    FOREIGN KEY(manager_id)REFERENCES employee(id)
    

);