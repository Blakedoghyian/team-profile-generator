class Intern {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

// exporting Intern class to test

module.exports = Intern;