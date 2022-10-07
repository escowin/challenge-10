// Manager properties | officeNumber
// Manager methods | override getRole(), return 'Manager'

const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        // inheritance
        super(name, id, email);

        // manager properties
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;