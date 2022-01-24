function Employee(name) {
    this.types = ['name', 'id', 'email'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'id') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Employee;

// The first class is an Employee parent class with the following properties and methods:

// name
// id
// email



// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

