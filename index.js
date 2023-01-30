// Import required Modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

// Import required library
const fs = require('fs');

// Import required dependencies
const inquirer = require('inquirer');
const path = require('path');

// Define the output directory and file path path
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

// Array of questions for user input
const questions = [
    "What role are you adding?",
    "Please enter employee's name: ",
    "Please enter employee's ID number: ",
    "Please enter employee's email address: ",
    "Please enter office phone number: ",
    "Please enter employee's GitHub username: ",
    "Please enter intern's univeristy: "
];

// Array to store employee objects
const employeeArray = [];

// Function to prompt user to select role type
function roleSelect () {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'roleType',
                message: questions[0],
                choices: ['Manager', 'Engineer', 'Intern', 'Team roles complete']
            }
        ])
        // Switch case to determine the selected role
        .then(function (roleSelect) {
            switch(roleSelect.roleType) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;

                default:
                    teamComplete();
            }
        })
};

// Function to add Manager role
function addManager () {
    console.log('\nAdding New Manager');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'id',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[3],
                default: 'manager@office.com'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: questions[4]
            }
        ])
        .then(managerInputs => {
            // Destructuring the managerInputs object
            const {name, id, email, officeNumber} = managerInputs;
            const manager = new Manager (name, id, email, officeNumber);
            // Pushing the manager object to the employeeArray
            employeeArray.push(manager)
            console.log(managerInputs);
            // Recalling the roleSelect function to prompt for adding another employee
            roleSelect();
        })
};

// Function to add Engineer role
function addEngineer () {
    console.log('\nAdding New Engineer');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'id',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[3],
                default: 'manager@office.com'
            },
            {
                type: 'input',
                name: 'gitHub',
                message: questions[5]
            }
        ])
        .then(engineerInputs => {
            // Destructuring the engineerInputs object
            const {name, id, email, gitHub} = engineerInputs;
            const engineer = new Engineer (name, id, email, gitHub);
            // Pushing the manager object to the employeeArray
            employeeArray.push(engineer)
            console.log(engineerInputs);
            // Recalling the roleSelect function to prompt for adding another employee
            roleSelect();
        })
};

// Function to add Intern role
function addIntern () {
    console.log('\nAdding New Intern');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'id',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[3],
                default: 'manager@office.com'
            },
            {
                type: 'input',
                name: 'university',
                message: questions[6]
            }
        ])
        .then(internInputs => {
            // Destructuring the internInputs object
            const {name, id, email, university} = internInputs;
            const intern = new Intern (name, id, email, university);
            // Pushing the manager object to the employeeArray
            employeeArray.push(intern)
            console.log(internInputs);
            // Recalling the roleSelect function to prompt for adding another employee
            roleSelect();
        })
};

// Function to write to a file and log a completion message
function teamComplete () {
    // Logs message to console indicating that team profiles are complete
    console.log("Team Profiles Complete!");

    // Writes the generated HTML to a file using the provided output path and UTF-8 encoding
    fs.writeFileSync(outputPath, generateHTML(employeeArray), 'UTF-8')
};

// Calls the roleSelect function to start the process
roleSelect();