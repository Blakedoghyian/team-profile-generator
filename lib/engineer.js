// require employee for super function
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Here, it calls the parent class's constructor
        super (name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

// exporting engineer class to test

module.exports = Engineer;