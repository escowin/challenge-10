const fs = require('fs');
const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

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
    });
};

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
                addEngineer();
                break;
            case "Add an intern":
                addIntern();
                break;
            case "Finalize team":
                finalizeTeam();
        }
    });
};

// select | engineer
const addEngineer = function() {
    inquirer
    .prompt([
        {
        type: "text",
        name: "name",
        message: "enter engineer's name",
        },
        {
        type: "number",
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
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        menu();
    });
    // - after user answers prompts, return to menu
};

// select | intern
const addIntern = function() {
    inquirer
    .prompt([
        {
        type: "text",
        name: "name",
        message: "enter intern's name",
        },
        {
        type: "number",
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
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        menu();
    });
    // ** validation to ensure proper input
};

// select | finish building team
const finalizeTeam = function() {
    console.log(team);
    // team.forEach(employee => console.log(employee.name));
    // generatePage(team);
    // fs.writeFile('index.html', generatePage(team), (err) => {
    //     if (err) throw err;
    //     console.log('team profile page has been built.');
    // });
};
// - exit app, generate html

// fs writeFile
// - generate html page from that data

// dist/profile.html
// - clicking on email link will open default email program & populate the TO field with employee's email
// - clicking on github link opens new tab


// mock data
const mockData = [
  new Manager (
    'Patrick Bateman', 1, 'bateman@pierceandpierce.com', 69
  ),
  new Engineer ('David Van Patten', 2, 'vanpatten@pierceandpierce.com', 'vanhub'),
  new Engineer ('Timothy Bryce', 3, 'bryce@pierceandpierce.com', 'brycehub'),
  new Intern ('Paul Allen', 4, 'paul@pierceandpierce.com', 'Yale'),
  new Intern ('Jean', 5, 'jean@pierceandpierce.com', 'NYU')
];

const testing = () => {
  const pageHTML = generatePage(mockData);
  fs.writeFile('./dist/index.html', pageHTML, (err) => {
    if (err) {
      console.log(err);
      return;
      console.log("file written");
    }
  });
};

testing();

// calls
// createManager();