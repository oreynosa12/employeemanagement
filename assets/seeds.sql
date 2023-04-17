USE employee_db;
INSERT INTO department (name) VALUES
('Sales'),
('Accounting'),
('Marketing'), 
('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES
('Sales Person', 80000, 1),
('Receivables', 80000, 2),
('Marketing Rep', 80000, 3),
('Manager', 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Joe', 'Smith', 1, NULL),
('Jane', 'Doe', 2, 1),
('David', 'Wright', 3, 2),
('Kenny', 'Janet', 'Thomas', 4, 3);