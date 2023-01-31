const Intern = require('../lib/intern');

const intern = new Intern('John', 1, 'john@wernhamhogg.co.uk', 'USYD')

test("Able to create new intern", () => {
    const newintern = new Intern;
    expect(typeof(newintern)).toBe('object');
})

test("Get intern name using intern.name", () => {
    expect(intern.name).toBe('John');
})

test("Get intern ID using intern.id", () => {
    expect(intern.id).toBe(1);
})

test("Get intern email using intern.email", () => {
    expect(intern.email).toBe('john@wernhamhogg.co.uk');
})

test("Get intern office number using intern.university", () => {
    expect(intern.university).toBe('USYD');
})

test("testing getName", () => {
    expect(intern.getName()).toBe('John');
})

test("testing getId", () => {
    expect(intern.getId()).toBe(1);
})

test("testing getEmail", () => {
    expect(intern.getEmail()).toBe('john@wernhamhogg.co.uk');
})

test("testing getUniversity", () => {
    expect(intern.getUniversity()).toBe('USYD');
})

test("testing getRole", () => {
    expect(intern.getRole()).toBe('Intern');
})