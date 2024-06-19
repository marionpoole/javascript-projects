const whoWon = require('../RPS.js');

describe("whoWon", function() {
    test("result is players tie if both choose the same option of rock, paper, or scissors", function() {
        let output = whoWon('rock','rock');
        expect(output).toBe("TIE!");
    });
    test("if player 1 chooses rock & player 2 chooses paper, player 2 wins", function() {
        let output = whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });
    test("if player 1 chooses paper & player 2 chooses scissors, player 2 wins", function() {
        let output = whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });
    test("if player 1 chooses scissors & player 2 chooses rock, player 2 wins", function() {
        let output = whoWon('scissors', 'rock');
        expect(output).toBe("Player 2 wins!");
    });
    test("if player 2 does not win, player 1 wins", function() {
        let output = whoWon('paper', 'rock');
        expect(output).toBe("Player 1 wins!");
    });
    test("if player 1 or player 2 select something other than rock, paper, or scissor; result is invalid response", function() {
        let output = whoWon('scissors', 'chocolate');
        expect(output).toBe("Invalid response!");
    });
});
