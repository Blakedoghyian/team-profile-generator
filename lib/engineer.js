class Engineer {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

// exporting engineer class to test

module.exports = Engineer;