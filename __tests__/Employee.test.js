const Employee = require('../lib/Employee');

test('create an Employee object', () => {
    const employee = new Employee('Patrick Bateman', 1, 'bateman@dorsia.com');

    expect(employee.name).toBe('Patrick Bateman');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('bateman@dorsia.com')
});

