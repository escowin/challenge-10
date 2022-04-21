const generateTeam = (team) => {
  // MANAGER
  const createManager = (manager) => {
    return `
        <div class = "employee-card">
            <div class = "card-header">
                <h2 class = "card-title">${manager.getName()}</h2>
                <h3 class = "card-title"><i class="fas fa-user-tie"></i> ${manager.getRole()}</h3>
            </div>
            <div class = "card-body">
                <ul class = "team-list">
                    <li class = "list-item">ID ${manager.getId()}</li>
                    <li class = "list-item">Email <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class = "list-item">Office ${manager.getofficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
  };

  // ENGINEER
  const createEngineer = (engineer) => {
    return `
        <div class = "employee-card">
            <div class = "card-header">
                <h2 class = "card-title"> ${engineer.getName()}</h2>
                <h3 class = "card-title"><i class="fas fa-project-diagram"></i> ${engineer.getRole()}</h3>
            </div>
            <div class = "card-body">
                <ul class = "team-list">
                    <li class = "list-item">ID ${engineer.getId()}</li>
                    <li class = "list-item">Email <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class = "list-item">GitHub <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    `;
  };

    // INTERN
    const createIntern = (intern) => {
        return `
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    const html = [];

    // PUSH EACH FUNCTION TO CORRESPONDING HTML SECTIONS
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("")
};

module.exports = (team) => {
  // TEMPLATE LITERAL
  return `
    <!DOCTYPE html>
        <html lang='en'>

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device=width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
            <link rel="stylesheet" href="style.css">
            <title>Team Profile</title>
        </head>

    <body>
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-12 jumbotron mb-3 title'>
                    <h1>Team Profile</h1>
                </div>
            </div>
        </div>
        <div class='container'>
            <div class='row'>
                <div class='employee-style col-12 d-flex justify-cintent-center'>
                    ${generateTeam(team)}
                </div>
            <div>
        </div>
    </body>
    </html>
    `;
};