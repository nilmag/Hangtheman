var hangtheman =  {
	guesses: [],
	solution: '',
	con:'',
	getRandomWord: function(list) {
		return list[Math.floor(Math.random() * list.length)];
	},
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
		if(this.guesses.indexOf(letter) === -1) {
			this.guesses.push(letter);
			this.render();
			
			if(this.guessedSolution(this.solution, this.guesses)) {
				this.con.style.color = '#0c0';
				console.log('HOOOORAAYYYYY!!!');
				document.getElementById('ht-guesses').disabled='disabled';
			}
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
	var list = ['Programming', 'Javascript', 'Require', 'Bootstrap', 'css', 'Backbone'];
	hangman.solution = hangman.getRandomWord(list);
	hangman.guesses=[];

	document.getElementById('input_row').style='display:block';

	hangman.con = document.getElementById('ht-letter-container');
	hangman.con.style.color='#000';
	hangman.render();

	var input = document.getElementById('ht-guesses');
	input.removeAttribute('disabled');
	input.addEventListener('keyup', function(e) {
		hangman.guess(input.value);
		input.value = '';
	}, false);
	document.getElementById('ht-guesses').focus();
};

var init = function() {
	var startbtn = document.getElementById('ht-start-btn');
	startbtn.addEventListener('click', function() {
		setUp();
	}, false);
}();