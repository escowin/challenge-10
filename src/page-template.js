const generatePage = team => {
  console.log(team)
  // const employees = [];

  // employees.push(
  //   team
  //     .filter(employee => employee.getRole() === "Manager")
  //     .map(manager => generateManager(manager))
  // );

//   employees.push(
//     team
//       .filter(employee => employee.getRole() === "Engineer")
//       .map(engineer => generateEngineer(engineer))
//   );

//   employees.push(
//     team
//       .filter(employee => employee.getRole() === "Intern")
//       .map(intern => generateIntern(intern))
//   );

  //   console.log(team.manager);

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
