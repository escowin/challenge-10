const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// mock data
jest.mock('../lib/Employee');

// test for intern properties
test('create an Intern object w/ properties', () => {
    const intern = new Intern('UT Austin');
    // console.log(intern);
    expect(intern.school).toBe('UT Austin');
});

// tests for intern methods
test('get school name', () => {
    const intern = new Intern('Yale');
    expect(intern.getSchool()).toEqual(expect.stringContaining("Yale"));
});

test('get the role of Intern for this employee', () => {
    const intern = new Intern();
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});