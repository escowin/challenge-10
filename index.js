const inquirer = require("inquirer");

// start app
// - team building prompts
inquirer
  .prompt([
    {
      type: "text",
      name: "name",
      message: "enter team manager's name",
    },
    {
      type: "text",
      name: "id",
      message: "enter team manager's id",
    },
    {
      type: "text",
      name: "email",
      message: "enter team manager's email address",
    },
    {
      type: "text",
      name: "officeNumber",
      message: "enter team manager's office number",
    },
  ])
  .then((managerDeatils) => {
    console.log(managerDeatils);
  });

// - after user answers prompts, show user a menu (options: add engineer, add intern, finish building team)

// select | engineer
inquirer
  .prompt([
    {
      type: "text",
      name: "name",
      message: "enter engineer's name",
    },
    {
      type: "text",
      name: "id",
      message: "enter engineer's id",
    },
    {
      type: "text",
      name: "email",
      message: "enter engineer's email address",
    },
    {
      type: "text",
      name: "github",
      message: "enter engineer's github username",
    },
  ])
  .then((engineerDetails) => {
    console.log(engineerDetails);
  });
// - after user answers prompts, return to menu

// select | intern
inquirer
  .prompt([
    {
      type: "text",
      name: "name",
      message: "enter intern's name",
    },
    {
      type: "text",
      name: "id",
      message: "enter intern's id",
    },
    {
      type: "text",
      name: "email",
      message: "enter intern's email address",
    },
    {
      type: "text",
      name: "school",
      message: "enter intern's school",
    },
  ])
  .then((internDetails) => {
    console.log(internDetails);
  });
// - after user answers prompts, return to menu
// ** validation to ensure proper input

// select | finish building team
// - exit app, generate html

// fs writeFile
// - generate html page from that data

// dist/profile.html
// - clicking on email link will open default email program & populate the TO field with employee's email
// - clicking on github link opens new tab
