const inquirer = require("inquirer");
const fs = require("fs");

// EMPLOYEE CONSTS
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// TEAM BUILDING
const teamBuilding = () => {
    const team = () => {
        return inquirer.prompt([
            {
            type: 'list',
            name: 'employee',
            message: 'team building starts now',
            choices: ['manager', 'engineer', 'intern', 'n/a']
            }
        ]).then(employee => {
            switch
            // cases, cases, cases
        })
    }
} 