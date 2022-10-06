// Manager properties | officeNumber
// Manager methods | override getRole(), return 'Manager'

const Employee = require("./Employee");

class Manager extends Employee{
    constructor(officeNumber, name) {
        // inheritance
        super(name);

        // manager properties
        this.officeNumber = officeNumber;
    }

    getRole() {
        return `${this.name}'s role in the company is Manager`;
    }
};

module.exports = Manager;