const inquirer = require("inquirer");
const fs = require("fs");

// EMPLOYEE CONSTS
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// EMPLOYEE ARRAYS
const team = [];
const arrayId = [];

// TEAM BUILDING
const teamBuilding = () => {
    const teamInfo = () => {
        return inquirer.prompt([
            {
            type: 'list',
            name: 'employee',
            message: 'team building starts now',
            choices: ['manager', 'engineer', 'intern', 'no employees']
            }
        ]).then(employees => {
            switch(employees.employee) {
                case 'manager':
                    managerInput();
                    break;
                case 'engineer':
                    engineerInput();
                    break;
                case 'intern':
                    internInput();
                    break;
            }
        });
    };
    
    const managerInput = () => {
        console.log("assemble your team:")
        return inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'enter manager name',
                validate: answer => {
                    if (!answer) {
                        return "we live in a society. who is the team manager?";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'enter manager id no.',
                validate: answer => {
                    // constrains input to accept only numbers
                    const input = answer.match(/^[0-9]\d*$/);
                    if (!input) {
                        return "numbers only. what is the manager's id no.?";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'enter manager email',
                validate: answer => {
                    if (!answer) {
                        return "what is the manager's email?";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'enter manager office number',
                validate: answer => {
                    const input = answer.match(/^[0-9]\d*$/);
                    if (!input) {
                        return "numbers only. what is the office number of this manager?";
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then(answer => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.email, answers.officeNumber);
            team.push(manager);
            arrayId.push(answers.managerId);
            teamInfo();
        });
    }

} 

// CALLS
teamBuilding();
