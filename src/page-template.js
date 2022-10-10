const generateTeam = team => {
  const employees = [];


  const generateManager = manager => {
    // console.log(manager.getName());
    return `
      <section>
        <h2 class='name'>${manager.getName()}</h2>
        <p class='role'>Manager</p>

        <p class='details'>email</p>
        <p>${manager.getEmail()}</p>

        <p class='details'>id</p>
        <p>${manager.getId()}</p>

        <p class='details'>office</p>
        <p>${manager.getOfficeNumber()}</p>
      </section>
    `;
  };
  
  const generateEngineer = engineer => {
    return `
      <section>
        <h2>${engineer.getName()}</h2>
        <p class='role'>Engineer</p>

        <p class='details'>email</p>
        <p>${engineer.getEmail()}</p>

        <p class='details'>id</p>
        <p>${engineer.getId()}</p>

        <p class='details'>github</p>
        <p>${engineer.getGithub()}</p>
      </section>`;
  };

  const generateIntern = intern => {
    return `
      <section>
        <h2>${intern.getName()}</h2>
        <p class='role'>Intern</p>

        <p  class='details'>email</p>
        <p>${intern.getEmail()}</p>

        <p  class='details'>id</p>
        <p>${intern.getId()}</p>

        <p  class='details'>github</p>
        <p>${intern.getSchool()}</p>
      </section>`;
  };


  employees.push(
    team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))
  );

  employees.push(
    team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateEngineer(engineer))
  );

  employees.push(
    team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
  );

  // console.log(employees.join('').replace(/>,/g, '>'))
  return employees.join('').replace(/>,/g, '>');

}

const generatePage = team => {

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel='stylesheet' href='styles.css'>
        <title>Team profile</title>
    </head>

    <body>
        <header>
            <h1>Team profile</h1>
        </header>
        <main>
          ${generateTeam(team)}
        </main>
        <footer>
            &copy; ${new Date().getFullYear()} 
            <a href='https://github.com/escowin/team-profile-generator' target='_blank'>
                Edwin escobar
            </a>
        </footer>
    </body>
  `;
};

module.exports = generatePage;