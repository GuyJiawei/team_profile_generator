const Manager = require('../lib/Manager');

const manager = new Manager('John', 1, 'john@wernhamhogg.co.uk', '0418528978')

test("Able to create new manager", () => {
    const newManager = new Manager;
    expect(typeof(newManager)).toBe('object');
})

test("Get manager name using manager.name", () => {
    expect(manager.name).toBe('John');
})

test("Get manager ID using manager.id", () => {
    expect(manager.id).toBe(1);
})

test("Get manager email using manager.email", () => {
    expect(manager.email).toBe('john@wernhamhogg.co.uk');
})

test("Get manager office number using manager.OfficeNumber", () => {
    expect(manager.OfficeNumber).toBe('0418528978');
})

test("testing getName", () => {
    expect(manager.getName()).toBe('John');
})

test("testing getId", () => {
    expect(manager.getId()).toBe(1);
})

test("testing getEmail", () => {
    expect(manager.getEmail()).toBe('john@wernhamhogg.co.uk');
})

test("testing getOfficeNumber", () => {
    expect(manager.getOfficeNumber()).toBe('0418528978');
})

test("testing getRole", () => {
    expect(manager.getRole()).toBe('Manager');
})