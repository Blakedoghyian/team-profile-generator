// require intern library for testing
const Intern = require('../lib/Intern');


// test Intern object with the following properties
// name, id, email, school, getName(), getId(), getEmail(), getSchool(), getRole()

const newIntern = new Intern('Dave');

describe("Intern", () => {
    test("Intern has a name input", () => {
        // name input must have string value
        expect(newIntern.name).toEqual(expect.any(String))
        // name input must be longer than 2 
        expect(newIntern.name.length).toBeGreaterThan(2)
    })
});