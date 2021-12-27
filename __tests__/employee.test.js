// test employee parent class with the following properties and methods:
// name, id, email, getName(), getId(), getEmail(), getRole() Returns 'Employee'

// require employee library for importing 
const { expect, it } = require('@jest/globals');
const Employee = require('../lib/employee');
const newEmployee = new Employee('Dave', 1230, 'dave@emailtest.com', Employee)

describe("Employee", () => {
    it("employee has name", () => {
        expect(newEmployee.name).toEqual(expect.any(String))
        expect(newEmployee.name.length).toBeGreaterThan(2)
    })
    it("employee has id that must be number", () =>{
        expect(newEmployee.id).toEqual(expect.any(Number))
    })
    it("employee has email address, must contain '@' ", () => {
        expect(newEmployee.email).toEqual(expect.stringContaining('@'))
    })
});
