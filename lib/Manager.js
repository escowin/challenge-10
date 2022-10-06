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
};

module.exports = Manager;