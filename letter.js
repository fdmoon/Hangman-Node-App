// ************************************
// * letter.js
// ************************************

var Word = require("./word.js");
var Score = require("./score.js");

var Letter = function() {
	this.word = {};
	this.score = {};

	this.answer = [];
	this.cmpWord = [];
	this.usrWord = [];
	this.guessed = [];
	this.remained = 10;

	this.initGame = function() {
		this.word = new Word();
		this.score = new Score();

		this.newGame();
	}

	this.newGame = function() {
		var answer = this.word.getWord();

		this.answer = answer.split("");
		this.cmpWord = answer.toLowerCase().split("");
		this.usrWord = [];
		this.guessed = [];
		this.remained = 10;

		for(var i = 0; i < answer.length; i++) {
			if(answer[i] === " ") {
				this.usrWord.push(" ");
			}
			else {
				this.usrWord.push("_");
			}
		}

		this.showWord("\n");
	}

	this.setGuess = function(x) {
		console.log("");

		if(this.guessed.indexOf(x) === -1) {
			this.guessed.push(x);

			var idx = this.cmpWord.indexOf(x);

			if(idx !== -1) {
				// can have one or more same letters in a word
				for(var i = 0; i < this.cmpWord.length; i++) {
					if(this.cmpWord[i] === x) {
						this.usrWord[i] = this.answer[i];
					}
				}

				this.showWord("");
				console.log("CORRECT!!!\n");				
			}
			else {
				this.remained--;

				this.showWord("");
				console.log("INCORRECT!!!\n");
				console.log(this.remained + " guesses remaining!!!\n");				
			}
		}
		else {
			console.log(x + " is the letter you've already guessed!\n");
		}				
	}

	this.isDone = function() {
		if(this.answer.toString() === this.usrWord.toString()) {
			console.log("You got it right!\n");
			this.score.setResult(true);
			return true;
		}
		else if(this.remained <= 0) {
			console.log("You failed!\n");
			this.score.setResult(false);
			return true;
		}

		return false;
	}

	this.showWord = function(crlf) {
		console.log(crlf + this.usrWord.toString().replace(/,/g, " ") + "\n");
	}	

	this.showResult = function() {
		this.score.showResult();
	}
}

module.exports = Letter;

