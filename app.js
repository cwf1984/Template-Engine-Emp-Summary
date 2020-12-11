const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeList = [];

// ask for manager information
function askUserForManagerInfo() {
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
    ]).then(( managerInfo ) => {

        const newManager = new Manager ( managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber );

        employeeList.push( newManager);

        askUserForEmployeeType();

    });

};

//Ask user for next employee type
function askUserForEmployeeType() {
    return inquirer.prompt([
        {
            message: "Which type of team member would you like to add? (Use arrow keys)",
            name: "employeeChoice",
            type: "list",
            choices: ["Manager", "Engineer", "Intern"]
        },
    ]).then(( askUserForEmployeeType.response ) => {
        // if selected new enigneer
        if ( "engineer" ) {
            askUserForEngineerInfo();
        }
        //else if user selected a new intern
        else if ( "intern" ) {
            askUserForInternInfo();
        }
        else {
         createHTMLFile();   
        }
    });
};

function askUserForEngineerInfo() {
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
    ]).then(( engineerInfo) => {
        const newEngineer = new Engineer (engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);

        employeeList.push( newEngineer);

        askUserForEmployeeType();
    })

}
//What is your enigeer's name?
//What is your engineer's id?
//What is your enigeer's email?
//What is your enigeer's github username?

//Ask again which type of employee to add

function askUserForInternInfo() {

}
//What is your intern's name?
//What is your intern's id?
//What is your intern's email?
//What school does your intern go to?

//I don't want to add anymore team members will exit out of application
//In output folder is a created html file

function createHTMLFile() {

    const htmlContent = render( employeeList );

    //Use fs module to create output file

}

askUserForManagerInfo();

//Creating array list of objects 
//each object is going to be a created manager, engineer or intern object from one of the classes


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
