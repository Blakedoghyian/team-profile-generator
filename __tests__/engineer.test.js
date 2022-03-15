// require engineer library for testing
const Engineer = require('../lib/engineer');


// test engineer object with the following properties
// name, id, email, github, getName(), getId(), getEmail(), getGithub(), getRole()

const newEngineer = new Engineer('Dave', 1023, 'dave@engineermail.com', Engineer);

describe("Engineer", () => {
    test("engineer has a name input", () => {
        // name input must have string value
        expect(newEngineer.name).toEqual(expect.any(String))
        // name input must be longer than 2 
        expect(newEngineer.name.length).toBeGreaterThan(2)
    })
    test("engineer has id that must be number", () => {
        expect(newEngineer.id).toEqual(expect.any(Number))
    })
    test("engineer has an email address, must contain'@' ", () => {
        expect(newEngineer.email).toEqual(expect.stringContaining('@'))
    })
    test("engineer input a github", () => {
        expect(newEngineer.github.length).toBeGreaterThan(2)
    })
});