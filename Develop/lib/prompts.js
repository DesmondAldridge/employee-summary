const allEmployeesPrompt = [
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
  ];

const engineerPrompt = [{
  type: "input",
  message: "What is your engineer's GitHub username?",
  name: "github",
}];

const internPrompt = [{
  type: "input",
  message: "Which school is your intern currently attending?",
  name: "school",
}];

// const managerPrompt = [{
//   type: "input",
//   message: "What is your manager's office number?"
// }];

module.exports = { allEmployeesPrompt, engineerPrompt, internPrompt};

