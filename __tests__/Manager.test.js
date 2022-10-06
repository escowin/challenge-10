const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

// mock data
jest.mock('../lib/Employee');

test('create a manager object' () => {
    const manager = new Manager();
});