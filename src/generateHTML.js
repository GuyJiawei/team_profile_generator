const generateTeamCards = (team) => {
    const html = [];
    const genManager = (manager) => {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h2 class="card-title">${manager.getName}</h2>
            <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId}</li>
            <li class="list-group-item">Email: ${manager.getEmail}</li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber}</li>
        </ul>
        </div>`;
        html.push(managerHtml);
    };
    
    const genEngineer = (engineer) => {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h2 class="card-title">${engineer.getName}</h2>
            <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId}</li>
            <li class="list-group-item">Email: ${engineer.getEmail}</li>
            <li class="list-group-item">GitHub: ${engineer.getGitHub}</li>
        </ul>
        </div>`;
        html.push(engineerHtml);
    };

    const genIntern = (intern) => {
        let internHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h2 class="card-title">${intern.getName}</h2>
            <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId}</li>
            <li class="list-group-item">Email: ${intern.getEmail}</li>
            <li class="list-group-item">University: ${intern.getUniversity}</li>
        </ul>
        </div>`;
        html.push(internHtml);
    };

    for (let i = 0; i < team.length; i++) {
        switch (team[i].getRole()) {
            case "Manager":
                genManager(team[i]);
                break;
            case "Engineer":
                genEngineer(team[i]);
                break;
            case "Intern":
                genIntern(team[i]);
                break;
        }
    };

    return html.join('');
}

module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    </head>
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mb-3 team-heading bg-primary">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeamCards(team)}
            </div>
        </div>
    </div>
    </body>
    <html/>`
};