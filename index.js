const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const team = [];

// start app
// - team building prompts
const createManager = function() {
    inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "enter team manager's name",
      },
      {
        type: "number",
        name: "id",
        message: "enter team manager's id",
      },
      {
        type: "text",
        name: "email",
        message: "enter team manager's email address",
      },
      {
        type: "number",
        name: "officeNumber",
        message: "enter team manager's office number",
      },
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        menu();
        // console.log(team);
    });
}

// - after user answers prompts, show user a menu(options: add engineer, add intern, finish building team)
const menu = function () {
    console.log(`
    ===============================
      Continue building your team
    ===============================
    `);

    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "choose from the following options:",
            choices: ["Add an engineer", "Add an intern", "Finalize team"]
        }
    ]).then(answer => {
        switch (answer.options) {
            case "Add an engineer":
                console.log('engineer case');
                break;
            case "Add an intern":
                console.log('intern case');
                break;
            case "Finalize team":
                console.log('finalize team case');
        }
    });
}

// select | engineer
// App.prototype.addEngineer = function() {
//     inquirer
//     .prompt([
//         {
//         type: "text",
//         name: "name",
//         message: "enter engineer's name",
//         },
//         {
//         type: "number",
//         name: "id",
//         message: "enter engineer's id",
//         },
//         {
//         type: "text",
//         name: "email",
//         message: "enter engineer's email address",
//         },
//         {
//         type: "text",
//         name: "github",
//         message: "enter engineer's github username",
//         },
//     ])
//     .then((engineerDetails) => {
//         console.log(engineerDetails);
//     });
//     // - after user answers prompts, return to menu
// };

// select | intern
// App.prototype.addIntern = function() {
//     inquirer
//     .prompt([
//         {
//         type: "text",
//         name: "name",
//         message: "enter intern's name",
//         },
//         {
//         type: "number",
//         name: "id",
//         message: "enter intern's id",
//         },
//         {
//         type: "text",
//         name: "email",
//         message: "enter intern's email address",
//         },
//         {
//         type: "text",
//         name: "school",
//         message: "enter intern's school",
//         },
//     ])
//     .then((internDetails) => {
//         console.log(internDetails);
//     });
//     // - after user answers prompts, return to menu
//     // ** validation to ensure proper input
// };

// select | finish building team
// App.prototype.finalizeTeam = function() {};
// - exit app, generate html

// fs writeFile
// - generate html page from that data

// dist/profile.html
// - clicking on email link will open default email program & populate the TO field with employee's email
// - clicking on github link opens new tab

// module.exports = App;

// calls
createManager();