const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// mock data
jest.mock('../lib/Employee');

// test for engineer properties
test('create an Engineer object', () => {
    const engineer = new Engineer('batehub');
    expect(engineer.github).toEqual(expect.stringContaining('batehub'));
});

// tests for engineer methods
test("getting engineer's github", () => {
    const engineer = new Engineer('paulhub');
    expect(engineer.getGithub()).toEqual(expect.stringContaining('paulhub'));
});

test('getting role of employee as "engineer"', () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});