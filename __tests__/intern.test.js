// require intern library for testing

const Intern = require('../lib/Intern');


// test Intern object with the following properties
// name, id, email, school, getName(), getId(), getEmail(), getSchool(), getRole()

const newIntern = new Intern('Dave', 1025, 'dave@internemail.com', Intern);

describe("Intern", () => {
    test("Intern has a name input", () => {
        // name input must have string value
        expect(newIntern.name).toEqual(expect.any(String))
        // name input must be longer than 2 
        expect(newIntern.name.length).toBeGreaterThan(2)
    })
    test("Intern has id that must be number", () =>{
        expect(newIntern.id).toEqual(expect.any(Number))
    })
    test("Intern has email address, must contain '@' ", () => {
        expect(newIntern.email).toEqual(expect.stringContaining('@'))
    })
    test("Intern has input a school", () => {
        expect(newIntern.school).toEqual(expect.any(String))
    })
});