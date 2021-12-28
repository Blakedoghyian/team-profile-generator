// test employee parent class with the following properties and methods:
// name, id, email, getName(), getId(), getEmail(), getRole() Returns 'Employee'

// require employee library for importing 
const { expect, it } = require('@jest/globals');
const Employee = require('../lib/employee');
const newEmployee = new Employee('Dave', 1230, 'dave@emailtest.com', Employee)

describe("Employee", () => {
    test("employee has name", () => {
        // name input must have string value
        expect(newEmployee.name).toEqual(expect.any(String))
        // name input must be longer than 2
        expect(newEmployee.name.length).toBeGreaterThan(2)
    })
    test("employee has id that must be number", () =>{
        expect(newEmployee.id).toEqual(expect.any(Number))
    })
    test("employee has email address, must contain '@' ", () => {
        expect(newEmployee.email).toEqual(expect.stringContaining('@'))
    })
});
