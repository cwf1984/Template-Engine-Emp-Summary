const Engineer = require("../lib/Engineer");

jest.mock("fs");

test("Can set GitHub account via constructor", () => {
  it("should set up link to the github account page", () => {
    
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    
    expect(e.github).toBe(testValue);
  });
  
});

test("getRole() should return \"Engineer\"", () => {
  it("should return the correct info needed for the job type", () => {

    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  
    expect(e.getRole()).toBe(testValue);  

  });

});

test("Can get GitHub username via getGithub()", () => {
  it("should show github useranme using the getGithub function", () => {

    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    
    expect(e.getGithub()).toBe(testValue);
  });

});
