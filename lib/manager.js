class Manager {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

// exporting Manager class to test

module.exports = Manager;