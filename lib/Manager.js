const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getofficeNumber() {
    return this.officeNumber;
  }

//  Overrides "Employee"
  getRole() {
    return "Engineer";
  }  
}

module.exports = Manager;
