const generateTeam = team => {
  const employees = [];

  const generateManager = manager => {
    // console.log(manager.getName());
    return `
      <section>
        <h2>${manager.getName()}</h2>
        <p class='role'>Manager</p>

        <p>email:</p>
        <p>${manager.getEmail()}</p>

        <p>id:</p>
        <p>${manager.getId()}</p>

        <p>office:</p>
        <p>${manager.getOfficeNumber()}</p>
      </section>
    `;
  };
  
  const generateEngineer = engineer => {
    // console.log(engineer.getName());
    return `
      <section>
        <h2>${engineer.getName()}</h2>
        <p class='role'>Engineer</p>

        <p>email:</p>
        <p>${engineer.getEmail()}</p>

        <p>id:</p>
        <p>${engineer.getId()}</p>

        <p>github:</p>
        <p>${engineer.getGithub()}</p>
      </section>
    `;
  };

  const generateIntern = intern => {
    // console.log(intern.getSchool())
    return `
      <section>
        <h2>${intern.getName()}</h2>
        <p class='role'>Intern</p>

        <p>email:</p>
        <p>${intern.getEmail()}</p>

        <p>id:</p>
        <p>${intern.getId()}</p>

        <p>github:</p>
        <p>${intern.getSchool()}</p>
      </section>
    `;
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

  return employees.join('');
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
