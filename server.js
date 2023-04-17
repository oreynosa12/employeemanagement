const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      name: 'choice',
      message: 'What would you like to do?',
      type:'list',
      choices:
       ['View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add an employee',
        'Update an employee role']

    },
  ])
  .then(answers => {
    switch (answers.choice) {
        case 'View all departments':
            addviewDepartment();
            break;

        case 'View all roles':
            addviewRoles();
            break;

         case 'View all employees':
            addviewEmployee();
            break;

        case 'Add a department':
            addDepartment();
            break;
    

        case 'Add an employee':
            addEmployee();
            break;
            
        case 'Add an employee role':
            addEmployeeRole();
            break;
            
    }
});

function addDepartment (){
    inquirer
  .prompt([
    {
      name: 'Name',
      message: 'What is the name department you would like to add?',
      type:'input',
      
    },

     ])
  .then(answers => {
  console.log(answers)
  });
  }



  function addEmployee (){
    inquirer
  .prompt([
    {
      name: 'firstName',
      message: 'What is the employee first name?',
      type:'input',
      
    },

    {
        name: 'lastName',
        message: 'What is the employee last name?',
        type:'input',
        
      },
  ])
  .then(answers => {
  console.log(answers)
  });
  }

  function addEmployeeRole(){
    inquirer
  .prompt([
    {
      name: 'Title',
      message: 'What is the employee title?',
      type:'input',
      
    },

    {
        name: 'Salary',
        message: 'What is the employee salary?',
        type:'input',
        
      },

      {
        name: 'lastName',
        message: 'What is the employee ID ?',
        type:'input',
        
      },
  ])
  .then(answers => {
  console.log(answers)
  });
  }