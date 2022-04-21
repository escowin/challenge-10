const Engineer = require('../lib/Engineer');

test("github username via constructor", () => {
    const github = "EngineerGuy";
    const engineer = new Engineer("Coby", 11, "email@email.com", github);
    expect(engineer.github).toBe(github);
  });
  
  test("engineer role from getRole()", () => {
    const role = "Engineer";
    const engineer = new Engineer("Coby", 11, "email@email.com", "EngineerGuy");
    expect(engineer.getRole()).toBe(role);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const github = "EngineerGuy";
    const engineer = new Engineer("Coby", 11, "email@email.com", github);
    expect(engineer.getGithub()).toBe(github);
  });
  