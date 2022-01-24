const Employee = require('../lib/Employee.js');

test('creates an employee thing', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreatherThan(0);
    expect(employee.value).toEqual(expect.any(Number));
});