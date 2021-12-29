// require Manager library for testing
const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');


// test Manager object with the following properties
// name, id, email, office, getName(), getId(), getEmail(), getOffice(), getRole()

const newManager = new Manager('Dave', 1024, 'dave@managermail.com', 101);

describe("Manager", () => {
    test("Manager has a name input", () => {
        // name input must have string value
        expect(newManager.name).toEqual(expect.any(String))
        // name input must be longer than 2 
        expect(newManager.name.length).toBeGreaterThan(2)
    })
    test("Manager has id that must be number", () => {
        expect(newManager.id).toEqual(expect.any(Number))
    })
    test("Manager has an email address, must contain'@' ", () => {
        expect(newManager.email).toEqual(expect.stringContaining('@'))
    })
    test("Manager has an office input that must be number", () => {
        expect(newManager.office).toEqual(expect.any(Number))
    })
});