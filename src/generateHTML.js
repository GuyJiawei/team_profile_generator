const generateTeamCards = (team) => {
    //Array to hold the generated HTML for each employee
    const html = [];
    //Function to generate HTML for Manager employee
    const genManager = (manager) => {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h2 class="card-title">${manager.name}</h2>
            <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office Number: ${manager.OfficeNumber}</li>
        </ul>
        </div>`;
        //Pushing the generated HTML for Manager to the html array
        html.push(managerHtml);
    };
    
    //Function to generate HTML for Engineer employee
    const genEngineer = (engineer) => {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h2 class="card-title">${engineer.name}</h2>
            <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">GitHub: ${engineer.gitHub}</li>
        </ul>
        </div>`;
        //Pushing the generated HTML for Engineer to the html array
        html.push(engineerHtml);
    };

    //Function to generate HTML for Intern employee
    const genIntern = (intern) => {
        let internHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h2 class="card-title">${intern.name}</h2>
            <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">University: ${intern.university}</li>
        </ul>
        </div>`;
        //Pushing the generated HTML for Intern to the html array
        html.push(internHtml);
    };

    //Looping through the team array and calling the relevant function for each employee type
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
    // Return the generated HTML and a string
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
    </html>`
};