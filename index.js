// require neccesary packages 
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const createHTML = require('./src/html-template');

const officeArray = []; 
// start questions on 'node index.js'
const init = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the manager.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('A manager name is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the id number of the manager.',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('An id number is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of the manager.',
            validate: email => {
                // email regex
                valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log('A real email address is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter the office number of the manager.',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('An office number is required.');
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        //gets manager data from user input and pushes it 
        const manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.office);
        officeArray.push(manager);
        
        console.log(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'To add a new employee, please select a role.',
            choices: ['Engineer', 'Intern'],
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('A role selection is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of this employee.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('An employee name is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the id number for this employee.',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('An id number is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address for this employee.',
            validate: email => {
                valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log('A real email address is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the github username for this engineer.',
            // this question will appear for Engineers
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('A github username is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the name of the school that this intern attended.',
            // this question will appear for Interns
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('A school name is required.');
                    return false;
                }
            }
        },
        {
            // new employee
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: 'false'
        }
    ])
    .then(employeeInput => {
        // gets employee data from user input and checks role selected
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeInput;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
        } else {
            employee = new Intern (name, id, email, school);
        };

        // pushes data into an array for the whole team
        officeArray.push(employee);
        console.log(employee);

        // if adding employee then run employee questions again
        if (confirmAddEmployee) {
            return addEmployee(officeArray);
        } else {
            // otherwise complete inquery and generate html file
            return officeArray;
        };
    });
}

// function to generate an HTML file with the data
const writeToFile = data => {
    // writes file at index.html in 'dist' directory
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            throw err;
        } else {
            console.log('Your office team profile was successfully created! You can view your web page by opening index.html in the dist folder.');
        }
    })
}

// initialize app
init()
    // start questions
    .then(addEmployee)
    // send array to html-template
    .then(officeArray => {
        return createHTML(officeArray);
    })
    // render in index.html
    .then(renderHTML => {
        return writeToFile(renderHTML);
    })
    .catch(err => {
        console.log(err);
    });