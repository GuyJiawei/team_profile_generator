const Employee = require('../lib/Employee');

const employee = new Employee('John', 1, 'john@wernhamhogg.co.uk')

test("Able to create new employee", () => {
    const newEmployee = new Employee;
    expect(typeof(newEmployee)).toBe('object');
})

test("Get employee name using employee.name", () => {
    expect(employee.name).toBe('John');
})

test("Get employee ID using employee.id", () => {
    expect(employee.id).toBe(1);
})

test("Get employee email using employee.email", () => {
    expect(employee.email).toBe('john@wernhamhogg.co.uk');
})

test("testing getName", () => {
    expect(employee.getName()).toBe('John');
})

test("testing getId", () => {
    expect(employee.getId()).toBe(1);
})

test("testing getEmail", () => {
    expect(employee.getEmail()).toBe('john@wernhamhogg.co.uk');
})

test("testing getRole", () => {
    expect(employee.getRole()).toBe('Employee');
})