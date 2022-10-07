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
        return `${this.name} is an Engineer at Dorsia`
    }
};

module.exports = Engineer;