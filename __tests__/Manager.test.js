const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

// mock data
jest.mock('../lib/Employee');

test('create a manager object w/ properties', () => {
    const manager = new Manager(101);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get the role of manager', () => {
    const manager = new Manager();
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});