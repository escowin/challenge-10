const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');

// EMPLOYEE CONSTS
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// EMPLOYEE ARRAYS
const team = [];
const arrayId = [];

// FS OUTPUT
const outputDir = path.resolve(__dirname, 'dist');
const outputPath = path.join(outputDir, 'index.html')
const generatePage = require('./src/page-template.js')

// TEAM BUILDING PROMPT
const teamBuildingPrompt = () => {
    const teamInfo = () => {
        return inquirer.prompt([
            {
            type: 'list',
            name: 'employee',
            message: 'enter the team composition',
            choices: ['manager', 'engineer', 'intern', 'no employees']
            }
        ]).then(employees => {
            switch(employees.employee) {
                case 'manager':
                    managerPrompt();
                    break;
                case 'engineer':
                    engineerPrompt();
                    break;
                case 'intern':
                    internPrompt();
                    break;
                    default: teamBuildingFs()

            }
        });
    };
    
    // MANAGER INFO PROMPT
    const managerPrompt = () => {
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
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.email, answers.officeNumber);
            team.push(manager);
            arrayId.push(answers.managerId);
            teamInfo();
        });
    }
    // ENGINEER INFO PROMPT
    const engineerPrompt = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'enter engineer name',
                validate: answer => {
                    if (!answer) {
                        return "who works here?";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'enter engineer id no.',
                validate: answer => {
                    // constrains input to accept only numbers
                    const input = answer.match(/^[0-9]\d*$/);
                    if (!input) {
                        return "numbers only. what is the engineer's id no.?";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'enter engineer email',
                validate: answer => {
                    if (!answer) {
                        return "what is the engineer's email?";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'enter engineer github account',
                validate: answer => {
                    if (!answer) {
                        return "the engineer surely has a github account, what is it?";
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.email, answers.github);
            team.push(engineer);
            arrayId.push(answers.engineerId);
            teamInfo();
        });
    }

    // INTERN INFO PROMPT
    const internPrompt = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'enter intern name',
                validate: answer => {
                    if (!answer) {
                        return "who is the intern of this team?";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: 'enter intern id no.',
                validate: answer => {
                    // constrains input to accept only numbers
                    const input = answer.match(/^[0-9]\d*$/);
                    if (!input) {
                        return "numbers only. what is the intern's id no.?";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'enter intern email',
                validate: answer => {
                    if (!answer) {
                        return "the intern has an email, what is it?";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "enter intern's school",
                validate: answer => {
                    if (!answer) {
                        return "what school is the intern enrolled in?";
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.email, answers.internSchool);
            team.push(intern);
            arrayId.push(answers.internId);
            teamInfo();
        });
    }

    // TEAMM BUILDING FS
    function teamBuildingFs() {
        if(!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir)
        }
        fs.writeFileSync(outputPath, generatePage(team), "utf-8");
    }

    teamInfo();
} 

// CALLS
teamBuildingPrompt();
