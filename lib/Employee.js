class Employee {
    // employee properties
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // employee methods
    getName() {
        return `this employee's name is ${this.name}.`;
    };

    getId() {
        return `${this.name}'s employee id is ${this.id}`;
    };

    getEmail() {
        return `${this.name}'s email address is ${this.email}`;
    };

    getRole() {
        return 'Employee';
    };
}

module.exports = Employee;