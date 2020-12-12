// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
// var util = require('util');

class Engineer extends Employee {

    constructor(name, id, email, github) {

        super(name, id, email);

        this.github = github;

        // this.role = role;


    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }


}

module.exports = Engineer;


// function Engineer(name, id, email, github) {

    //apply is built in function of an object
    // Employee.apply(this, arguments);

    // this.role = "Engineer";
    // handle github
//     this.github = github;

// }

// util.inherits(Engineer, Employee);

// Engineer.prototype.getGithub = function() {
//     return this.github;
// }

// Engineer.prototype.getRole = function() {
//     return this.role;
// }


