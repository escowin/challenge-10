const Employee = require('../lib/Employee');

test('create an Employee object', () => {
    const employee = new Employee('Patrick Bateman', 1, 'bateman@dorsia.com');

    expect(employee.name).toBe('Patrick Bateman');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('bateman@dorsia.com')
});

test('get the Employee name', () => {
    const employee = new Employee('Paul Allen', 2, 'allen@dorsia.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('get the Employee ID no.', () => {
    const employee = new Employee('Jane', 3, 'jane@dosia.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('get the Employee email address', () => {
    const employee = new Employee('Craig McDermott', 4, 'mcdermott@dorsia.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('get the role of the Employee', () => {
    const employee = new Employee('')

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});