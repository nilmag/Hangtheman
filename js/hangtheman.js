var words = ['Javascript', 'Programming', 'TestDriven-Development', 'Hanttheman'];

var hangtheman =  {
	maskTheWord: function(word, chars) {
		console.log(chars.join(''));
		var regex = new RegExp('[^' + chars.join() + ']', 'gi');

		word = word.replace(regex, '*');

		return word;
	},
	guessedSolution: function(solution, guesses) {
		return this.maskTheWord(solution, guesses) === solution;
	}
};