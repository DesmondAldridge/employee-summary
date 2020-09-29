const inquirer = require("inquirer");

function allEmployeesPrompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your employee?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee's ID?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your employee's email?",
    },
  ])};

function engineerPrompt() {
  return inquirer.prompt([
   {
      type: "input",
      message: "What is your engineer's GitHub username?",
      name: "github",
   }
])};

function internPrompt() {
  return inquirer.prompt([
  {
  type: "input",
  message: "Which school is your intern currently attending?",
  name: "school",
  }
])};

// const managerPrompt = [{
//   type: "input",
//   message: "What is your manager's office number?"
// }];

module.exports = {allEmployeesPrompt, engineerPrompt, internPrompt};

