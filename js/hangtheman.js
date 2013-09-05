var words = ['Javascript', 'Programming', 'TestDriven-Development', 'Hanttheman'];

var hangtheman =  {
	guesses: [],
	solution: '',
	con:'',
	maskTheWord: function(word, chars) {
		console.log(chars.join(''));
		var regex = new RegExp('[^' + chars.join() + ']', 'gi');

		word = word.replace(regex, '*');

		return word;
	},
	guessedSolution: function(solution, guesses) {
		return this.maskTheWord(solution, guesses) === solution;
	},
	render: function() {
		this.con.innerHTML = this.maskTheWord(this.solution, this.guesses).split("").map(function(c) {
			return '<span style="padding: 12px; margin: 3px; font-size: 4em;">' + c + '</span>';
		}).join("");
	},
	guess: function(letter) {
		this.guesses.push(letter);
		this.render();
		
		if(this.guessedSolution(this.solution, this.guesses)) {
			this.con.style.color = '#0c0';
			console.log('HOOOORAAYYYYY!!!');
		}
	},
	printGuesses: function() {
		console.log(this.guesses);
		console.log(this.maskTheWord(this.solution, this.guesses));
	}
};

var onGuess = function(val) {
	console.log('Key pressed: ' + $('#ht-guesses').val());
	$('#ht-guesses').val('');
};

// $(document).ready(function() {
// 	$('#ht-start-btn').bind('click', function() {
// 		console.log('starting the game-');
// 	});

// 	var el = $('#ht-guesses')[0];
// 	el.addEventListener('keyup', onGuess, false);
// });

var setUp = function() {
	var hangman = hangtheman;
	hangman.solution = 'Programming';

	hangman.con = document.getElementById('ht-letter-container');
	hangman.render();

	var startbtn = document.getElementById('ht-start-btn');
	console.log(startbtn);
	startbtn.addEventListener('click', function() {
		console.log('starting');
	}, false);

	var input = document.getElementById('ht-guesses');
	input.addEventListener('keyup', function(e) {
		hangman.guess(input.value);
		input.value = '';
	}, false);
	document.getElementById('ht-guesses').focus();
}();