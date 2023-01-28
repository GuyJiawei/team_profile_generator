const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');

const fs = require('fs');
const inquirer = require('inquirer');

const OUTPUT_DIR = path.resolve(_dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const questions = [
    "What role are you adding?",
    "Please enter employee's name: ",
    "Please enter employee's ID number: ",
    "Please enter employee's email address: ",
    "Please enter office phone number: ",
    "Please enter employee's GitHub username: ",
    "Please enter intern's univeristy: "
];

const employeeArray = [];


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
            const {name, id, email, officeNumber} = managerInputs;
            const manager = new Manager (name, id, email, officeNumber);

            employeeArray.push(manager)
            console.log(managerInputs);
            roleSelect();
        })
};

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
            const {name, id, email, gitHub} = engineerInputs;
            const engineer = new Engineer (name, id, email, gitHub);

            employeeArray.push(engineer)
            console.log(engineerInputs);
            roleSelect();
        })
};

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
            const {name, id, email, university} = internInputs;
            const intern = new Intern (name, id, email, university);

            employeeArray.push(intern)
            console.log(internInputs);
            roleSelect();
        })
};

function teamComplete () {
    console.log("Team Profiles Complete!");

    fs.writeFileSync(outputPath, generateHTML(employeeArray), 'UTF-8')
};

roleSelect();