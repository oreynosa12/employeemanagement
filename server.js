const inquirer = require("inquirer");
const express = require("express");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Ambition",
    database: "employee_db",
  },
  console.log(`Connected to the books_db database.`)
);

inquirer
  .prompt([
    {
      name: "choice",
      message: "What would you like to do?",
      type: "list",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ])
  .then((answers) => {
    switch (answers.choice) {
      case "View all departments":
        viewDepartment();
        break;

      case "View all roles":
        viewRoles();
        break;

      case "View all employees":
        viewEmployee();
        break;

      case "Add a department":
        addDepartment();
        break;

      case "Add an employee":
        addEmployee();
        break;

      case "Add an employee role":
        addEmployeeRole();
        break;

      case "Update an employee role":
        addupdateEmployeeRole();
        break;
    }
  });

function viewDepartment() {
  db.query("SELECT * FROM department", function (error, results) {
    console.table(results);
  });
}

function viewRoles() {
  db.query("SELECT * FROM roles", function (error, results) {
    console.table(results);
  });
}

function viewEmployee() {
  db.query("SELECT * FROM employee", function (error, results) {
    console.table(results);
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "depName",
        message: "What is the name department you would like to add?",
        type: "input",
      },
    ])
    .then((answers) => {
      db.query(
        "INSERT INTO department SET ?",
        {
          name: answers.depName,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`\n${answers.depName} has been added as a new department. \n`);
          console.table();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "firstName",
        message: "What is the employee first name?",
        type: "input",
      },

      {
        name: "lastName",
        message: "What is the employee last name?",
        type: "input",
      },
    ])
    .then((answers) => {
      console.log(answers);
    });
}

function addEmployeeRole() {
  inquirer
    .prompt([
      {
        name: "Title",
        message: "What is the employee title?",
        type: "input",
      },

      {
        name: "Salary",
        message: "What is the employee salary?",
        type: "input",
      },

      {
        name: "lastName",
        message: "What is the employee ID ?",
        type: "input",
      },
    ])
    .then((answers) => {
      console.log(answers);
    });
}

function addupdateEmployeeRole() {
  inquirer
    .prompt([
      {
        name: "Title",
        message: "What is the employee Title?",
        type: "input",
      },

      {
        name: "Salary",
        message: "What is the employee salary?",
        type: "input",
      },

      {
        name: "lastName",
        message: "What is the employee department id?",
        type: "input",
      },
    ])
    .then((answers) => {
      console.log(answers);
    });
}
