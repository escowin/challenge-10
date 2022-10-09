const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

// mock data
jest.mock('../lib/Employee');

test('create a manager object w/ properties', () => {
    const manager = new Manager(101);
});

test('get the role of manager', () => {
    const manager = new Manager();
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});

test('get office number', () => {
    const manager = new Manager(69);
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});