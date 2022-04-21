const Employee = require('../lib/Employee');

test('get employee stats as an object', () => {
    const employee = new Employee("dave", 11, "email@email.com");

    expect(employee.name).toEqual("dave");
    expect(employee.id).toEqual(11);
    expect(employee.email).toEqual("email@email.com");
    // expect(employee.role).toEqual("Employee");
});