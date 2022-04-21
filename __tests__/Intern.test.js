const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test("set school via constructor", () => {
    const school = "UT Austin";
    const intern = new Intern("wilson", 9, "email@email.com", school);
    expect(intern.school).toBe(school);
  });
  
  test("get intern role via getRole()", () => {
    const role = "Intern";
    const intern = new Intern("wilson", 9, "email@email.com", "UT Austin");
    expect(intern.getRole()).toBe(role);
  });
  
  test("get school via getSchool()", () => {
    const school = "404";
    const intern = new Intern("wilson", 9, "email@email.com", school);
    expect(intern.getSchool()).toBe(school);
  });
  