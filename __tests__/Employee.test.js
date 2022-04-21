const Employee = require('../lib/Employee');

test('get employee stats as an object', () => {
    const employee = new Employee("dave", 11, "email@email.com");

    expect(employee.name).toEqual("dave");
    expect(employee.id).toEqual(11);
    expect(employee.email).toEqual("email@email.com");
    // expect(employee.role).toEqual("Employee");
});

test('get employee name from getName()', () => {
    const name = "dave";
    const employee = new Employee(name);
    expect(employee.getName()).toEqual(name);
});

test('get employee id from getId()', () => {
    const id = 11;
    const employee = new Employee('sean', id);
    expect(employee.getId()).toEqual(id);
});

test('get employee email from getEmail()', () => {
    const email = "email@email.com";
    const employee = new Employee("lex", 11, email);
    expect(employee.getEmail()).toEqual(email);
});

test('get employee role from getRole()', () => {
    const role = 'Employee';
    const employee = new Employee('smithers', role);
    expect(employee.getRole()).toEqual(role);
});