const generateTeam = team => {
  const employees = [];


  const generateManager = manager => {
    // console.log(manager.getName());
    return `
      <section>
        <h2 class='name'>${manager.getName()}</h2>
        <p class='role'>Manager</p>

        <p class='details'>id</p>
        <p>${manager.getId()}</p>

        <p class='details'><i class="fa-solid fa-envelope"></i></p>
        <p class='email'><a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></p>

        <p class='details'><i class="fa-solid fa-building"></i></p>
        <p>${manager.getOfficeNumber()}</p>
      </section>
    `;
  };
  
  const generateEngineer = engineer => {
    return `
      <section>
        <h2 class='name'>${engineer.getName()}</h2>
        <p class='role'>Engineer</p>

        <p class='details'>id</p>
        <p>${engineer.getId()}</p>

        <p class='details'><i class="fa-solid fa-envelope"></i></p>
        <p class='email'><a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></p>

        <p class='details'><i class="fa-brands fa-github"></i></p>
        <p><a href='https://github.com/${engineer.getGithub()}/' target='_blank'>${engineer.getGithub()}</a></p>
      </section>`;
  };

  const generateIntern = intern => {
    return `
      <section>
        <h2 class='name'>${intern.getName()}</h2>
        <p class='role'>Intern</p>
        
        <p class='details'>id</p>
        <p>${intern.getId()}</p>

        <p class='details'><i class="fa-solid fa-envelope"></i></p>
        <p class='email'><a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></p>

        <p class='details'><i class="fa-solid fa-school-flag"></i></p>
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Nunito:wght@200&display=swap" rel="stylesheet">        <link rel='stylesheet' href='styles.css'>
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