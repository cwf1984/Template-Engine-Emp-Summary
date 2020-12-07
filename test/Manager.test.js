const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

jest.mock("fs");

test("Can set office number via constructor argument", () => {
  it("should log the office number to the card using the constructor", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);

    expect(e.officeNumber).toBe(testValue);

  });

});

test('getRole() should return "Manager"', () => {
  it("should return the manager properties through the getRole function", () => {
    
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    
    expect(e.getRole()).toBe(testValue);
  });

});

test("Can get office number via getOffice()", () => {
  it("should return the office number with the getOffice function by prompting the user", () => {
    
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    
    expect(e.getOfficeNumber()).toBe(testValue);
  
  });

});
