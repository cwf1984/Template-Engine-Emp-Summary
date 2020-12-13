// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// ask for manager information
function getManagerData() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name",
            
        },
        {
            type: "input",
            message: "What is your manager's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "number",
        },
    ]).then(( managerData ) => {

        const newManager = new Manager ( managerData.name, managerData.id, managerData.email, managerData.officeNumber );

        employees.push( newManager );

        chooseEmployee();

    });

};

//Ask user for next employee type
function chooseEmployee() {
    return inquirer.prompt([
        {
            message: "Which type of team member would you like to add? (Use arrow keys)",
            name: "employeeChoice",
            type: "list",
            choices: ["Engineer", "Intern", "I don't want to add anymore employees"]
        },
    ]).then(( response ) => {
        // console.log(response);
        // if selected new enigneer
        if ( response.employeeChoice === "Engineer" ) {
            getEngineerData();
        }
        //else if user selected a new intern
        else if ( response.employeeChoice == "Intern" ) {
            getInternData();
        }
        else {
         createHTMLFile();   
        }
    });
};

function getEngineerData() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "github",
        },
    ]).then(( engineerData) => {
        const newEngineer = new Engineer (engineerData.name, engineerData.id, engineerData.email, engineerData.github);

        employees.push( newEngineer);

        chooseEmployee();
    });

};

function getInternData() {
    
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the name of your intern's school?",
            name: "school",
        },
    ]).then(( internData ) => {

        const newIntern = new Intern (internData.name, internData.id, internData.email, internData.school);

        employees.push( newIntern );

        chooseEmployee();

    });

};


//I don't want to add anymore team members will exit out of application
//In output folder is a created html file

function createHTMLFile() {

    fs.writeFile("employeeSummary.html", render( employees ), (err) => {
        err ? console.log(err) : console.log("Success!");
        
    })

}

getManagerData();
