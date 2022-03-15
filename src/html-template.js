// new manager card


const createManager = function(manager) {
    return `
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="officeNumber">Office #: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;
};



// new engineer card
const createEngineer = function(engineer) {
    return `
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};



// new intern card
const createIntern = function(intern) {
    return `
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};


// pull data into function so that duplicate cards can be created
createHTML = (data) => {
    htmlArray = [];

    for (let i=0; i < data.length; i++) {
        const employee = data[i];
        // defines role
        const role = employee.getRole();

        if (role === 'Manager') {
            // create manager card 
            const managerCard = createManager(employee);
            htmlArray.push(managerCard);
        }

        if (role === 'Engineer') {
            // create engineer card 
            const engineerCard = createEngineer(employee);
        
            htmlArray.push(engineerCard);
        }

        if (role === 'Intern') {
            // create intern card
            const internCard = createIntern(employee);
            htmlArray.push(internCard)
        }
    }


    // joins all strings together to create cards
    const allTeamCards = htmlArray.join('');
    const generateTeam = createHTMLPage(allTeamCards);
    return generateTeam;
}


// here we take the data from all the card templates and render them inside the html template
const createHTMLPage = function(allTeamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <header>
            <section class="navbar">
                <h1 class="header-text">My Team</h1>
            </section>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="cards">
                    ${allTeamCards}
                </div>
            </div>
        </main>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    `;
}


// export to the index file
module.exports = createHTML;