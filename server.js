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
    if (answers.choice == 'Add Employee'){
        addEmployee()
    }
  });

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