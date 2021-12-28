// require engineer library for testing
const Engineer = require('../lib/engineer');


// test engineer object with the following properties
// name, id, email, github, getName(), getId(), getEmail(), getGithub(), getRole()

const newEngineer = new Engineer('Dave');

describe("Engineer", () => {
    test("engineer has a name input", () => {
        // name input must have string value
        expect(newEngineer.name).toEqual(expect.any(String))
        // name input must be longer than 2 
        expect(newEngineer.name.length).toBeGreaterThan(2)
    })
});