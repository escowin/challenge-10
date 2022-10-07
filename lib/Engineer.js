// Engineer properties | github
// Engineer methods | getGithub(), override getRole() for return 'Engineer'

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        // inheritance
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return `${this.github}`;
    };

    getRole() {
        return 'Engineer'
    }
};

module.exports = Engineer;