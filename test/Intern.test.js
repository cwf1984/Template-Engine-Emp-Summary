const Intern = require("../lib/Intern");

jest.mock("fs");

test("Can set school via constructor", () => {
  it("Should set school name into card in correct line", () => {
   
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    
    expect(e.school).toBe(testValue); 

  });
  
});

test("getRole() should return \"Intern\"", () => {
  it("should return the role of intern when the getRole function is run", () => {

    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "UCLA");
    
    expect(e.getRole()).toBe(testValue);

  });

});

test("Can get school via getSchool()", () => {
  it("should return the school name with the getSchool function", () => {
    
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    
    expect(e.getSchool()).toBe(testValue);
  });

});
