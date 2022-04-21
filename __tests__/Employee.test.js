const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer');
console.log(new Engineer());

test('get employee stats as an object', () => {
    const employee = new Employee('dave');

    expect(player.getStats()).toHaveProperty('engineer');
    expect(player.getStats()).toHaveProperty('intern');
    expect(player.getStats()).toHaveProperty('manager')

    // name property
    // expect(employee.name).toBe('dave');
    // number property
    // expect(employee.id).toEqual(expect.any(Number));
    // name property
    // expect(employee.email).toBe('employee@work.com');
});