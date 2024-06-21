// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should return non profit for organization key", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });
test("should return 'Jeff' for executiveDirector", function() {
  expect(launchcode.executiveDirector).toBe("Jeff");
});
test("should return 100 for percentageCoolEmployees", function() {
  expect(launchcode.percentageCoolEmployees).toBe(100);
});
test("should return array including Web Development, Data Analysis, Liftoff for programsOffered", function() {
  expect(launchcode.programsOffered).toContain("Web Development");
});
test("should return array including Web Development, Data Analysis, Liftoff for programsOffered", function() {
  expect(launchcode.programsOffered).toContain("Data Analysis");
});
test("should return array including Web Development, Data Analysis, Liftoff for programsOffered", function() {
  expect(launchcode.programsOffered).toContain("Liftoff");
});
test("programsOffered array should contain 3 items", function() {
  expect(launchcode.programsOffered.length).toBe(3);
});
  test("launchOutput() should return 'Launch!' when number divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });
  test("launchOutput() should return 'Code!' when number divisible by 3", function() {
    expect(launchcode.launchOutput(9)).toBe("Code!");
  });
  test("launchOutput() should return 'Rocks!' when number divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });
  test("launchOutput() should return 'LaunchCode!' when number divisible by 2 and 3", function() {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  test("launchOutput() should return 'Code Rocks!' when number divisible by 3 and 5", function() {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });
  test("launchOutput() should return 'Launch Rocks!' when number divisible by 2 and 5", function() {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks!");
  });
  test("launchOutput() should return 'LaunchCode Rocks!' when number divisible by 2, 3, and 5", function() {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });
  test("launchOutput() should return 'Rutabagas! That doesn't work.' when passed a number not divisible by 2, 3, or 5", function() {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
});
