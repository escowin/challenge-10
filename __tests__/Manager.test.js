const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test("set office via constructor", () => {
    const officeNumber = 404;
    const manager = new Manager("Steve", 11, "email@email.com", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
  });
  
  test("get manager role via getRole()", () => {
    const role = "Manager";
    const manager = new Manager("Elizabeth", 13, "email@email.com", 404);
    expect(manager.getRole()).toBe(role);
  });
  
  test("get office number via getOffice()", () => {
    const officeNumber = "404";
    const manager = new Manager("Alexa", 11, "email@email.com", officeNumber);
    expect(manager.getofficeNumber()).toBe(officeNumber);
  });
  