const Engineer = require('../lib/Engineer');

const engineer = new Engineer('John', 1, 'john@wernhamhogg.co.uk', 'johngithub')

test("Able to create new engineer", () => {
    const newEngineer = new Engineer;
    expect(typeof(newEngineer)).toBe('object');
})

test("Get engineer name using engineer.name", () => {
    expect(engineer.name).toBe('John');
})

test("Get engineer ID using engineer.id", () => {
    expect(engineer.id).toBe(1);
})

test("Get engineer email using engineer.email", () => {
    expect(engineer.email).toBe('john@wernhamhogg.co.uk');
})

test("Get engineer office number using manager.gitHub", () => {
    expect(engineer.gitHub).toBe('johngithub');
})

test("testing getName", () => {
    expect(engineer.getName()).toBe('John');
})

test("testing getId", () => {
    expect(engineer.getId()).toBe(1);
})

test("testing getEmail", () => {
    expect(engineer.getEmail()).toBe('john@wernhamhogg.co.uk');
})

test("testing getGitHub", () => {
    expect(engineer.getGitHub()).toBe('johngithub');
})

test("testing getRole", () => {
    expect(engineer.getRole()).toBe('Engineer');
})