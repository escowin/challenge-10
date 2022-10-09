const generatePage = team => {
  const employees = [];

  const generateManager = manager => {
    return `
    <section>
      <h2>${manager.getName()}</h2>
      <p>email:</p>
      <p>${manager.getEmail()}</p>

      <p>id:</p>
      <p>${manager.getId()}</p>

      <p>office:</p>
      <p>${manager.getOfficeNumber()}</p>
    </section>
    `;
  };
  console.log(generateManager());
  
  const generateEngineer = manager => console.log(manager.getRole());
  const generateIntern = manager => console.log(manager.getRole());


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

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team profile</title>
    </head>

    <body>
        <header>
            <h1>Team profile</h1>
        </header>
        <main>
          ${generateManager(manager)}
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

// const generateManager = manager => {
//     const { name, id, email, officeNumber } = manager
//     console.log(name);
//   };
  
//   const generateEngineer = engineer => {
//     console.log(engineer);
//   };
  
  // const generateIntern = intern => {
  //     console.log(intern);
  // };

module.exports = generatePage;
