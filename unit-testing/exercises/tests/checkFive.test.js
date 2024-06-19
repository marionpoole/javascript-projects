const checkFive = require('../checkFive.js');

describe("checkFive", function() {
    test("returns that number is less than 5", function() {
        let output = checkFive(2);
        expect(output).toBe("2 is less than 5.");
    });
    test("returns that number is greater than 5", function() {
        let output = checkFive(8);
        expect(output).toBe("8 is greater than 5.");
    });
    test ("returns that 5 is equal to 5", function() {
        let output = checkFive(5);
        expect(output).toBe("5 is equal to 5.");
    });
});
