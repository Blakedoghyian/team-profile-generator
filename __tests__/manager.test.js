// require Manager library for testing
const Manager = require('../lib/Manager');


// test Manager object with the following properties
// name, id, email, office, getName(), getId(), getEmail(), getOffice(), getRole()

const newManager = new Manager('Dave');

describe("Manager", () => {
    test("Manager has a name input", () => {
        // name input must have string value
        expect(newManager.name).toEqual(expect.any(String))
        // name input must be longer than 2 
        expect(newManager.name.length).toBeGreaterThan(2)
    })
});