const generatePage = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team profile</title>
    </head>

    <body>
        <header>
            <h1>Team profile</h1>
        </header>
        <main>
            ${console.log(
                team.filter(employee => employee.getRole() === 'Manager')
            )}
        </main>
        <footer></footer>
    </body>
  `;
};


module.exports = generatePage;