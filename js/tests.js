$(document).ready(function() {
    test('Initial test', function() {
        equal(true, true, 'passed');
    });

    test('mask the word', function() {
        equal(hangtheman.maskTheWord('javascript', ['o']), '**********', 'Masked the word with no hits');
        equal(hangtheman.maskTheWord('javascript', ['j', 'v', 'a', ',']), 'java******', 'Masked the word with some hits');
        equal(hangtheman.maskTheWord('JaVa', ['j', 'v']), 'J*V*', 'Masked the word ignoring case');
        equal(hangtheman.maskTheWord('javascript2', ['a', '2']), '*a*a******2', 'Masked the word with some hits and numeric');
        equal(hangtheman.maskTheWord('jav ascript2', [' ', '2']), '*** *******2', 'Masked the word with some hits, numeric and space');
        equal(hangtheman.maskTheWord('ja-va', ['j', '-']), 'j*-**', 'Masked the word with dash');
    });

    test('Guessed the solution', function() {
        equal(hangtheman.guessedSolution('java', ['j', 'a', 'v']), true, 'Guessed the solution with similar case');
        equal(hangtheman.guessedSolution('Java', ['j', 'a', 'v']), true, 'Guessed the solution without similar case');
        equal(hangtheman.guessedSolution('java', ['J', 'a', 'v']), true, 'Guessed the solution without similar case');
        equal(hangtheman.guessedSolution('java', ['j', 'v']), false, 'Did not guess the solution');
    });
});