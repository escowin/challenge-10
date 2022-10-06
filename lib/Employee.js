// Employee properties | name, id, email
// Employee methods | getName(), getId(), getEmail(), getRole()

class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

module.exports = Employee;