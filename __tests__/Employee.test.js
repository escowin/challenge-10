const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('dave');

    expect(employee.name).toBe('dave');
    expect(employee.id).toEqual(expect.any(Number));
    // expect(employee.email).toBe('employee@work.com');
});