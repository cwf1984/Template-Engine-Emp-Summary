class Engineer extends Employee {

    constructor (name, id, email, github) {

        super(name, id, email);

        github = github;

    };

    getGithub() {
        return this.github;

}

}


module.export = Engineer;
