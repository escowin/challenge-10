// Intern properties | school
// Intern methods | getSchool(), override getRole() for return 'Intern'

const Employee = require("./Employee");

class Intern extends Employee{
    constructor(school, details) {
        super(details);

        this.school = school;
    }

    getSchool() {
        return `${this.name} is a student at ${this.school}`
    };

    getRole() {
        return 'Intern';
    };
}

module.exports = Intern;