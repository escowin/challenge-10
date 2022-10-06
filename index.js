const inquirer = require('inquirer');


// start app
// - team building prompts
inquirer.prompt([
    {
        type: 'text',
        name: 'name',
        message: "enter team manager's name"
    },
    {
        type: 'text',
        name: 'id',
        message: "enter team manager's id"
    },
    {
        type: 'text',
        name: 'email',
        message: "enter team manager's email address"
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: "enter team manager's office number"
    },
]);

// - after user answers prompts, show user a menu (options: add engineer, add intern, finish building team)

// select | engineer
// - enter engineer name, id#, email, github username
// - after user answers prompts, return to menu

// select | intern
// - enter intern name, id#, email, school
// - after user answers prompts, return to menu
// ** validation to ensure proper input

// select | finish building team
// - exit app, generate html

// fs writeFile
// - generate html page from that data

// dist/profile.html
// - clicking on email link will open default email program & populate the TO field with employee's email
// - clicking on github link opens new tab