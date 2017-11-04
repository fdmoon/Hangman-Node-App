// ************************************
// * hangman.js
// ************************************

var inquirer = require("inquirer");
var Letter = require("./letter.js");
var colors = require('colors');

var letter = new Letter();

letter.initGame();
goHangman();

function goHangman() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Guess a letter! ",
				validate:
					function(value) {
						if (value.match(/[a-z]/i) && (value.length === 1)) {
							return true;
						}
						return false;
					},
				name: "guess"
			}
		]).then(function(input) {
			letter.setGuess(input.guess);

			if(letter.isDone()) {
				tryAgain();
			}
			else {
				goHangman();
			}
		});
}

function tryAgain() {
	inquirer
		.prompt([
			{
				type: "confirm",
				message: "Do you want to try again? ",
				name: "again"
			}
		]).then(function(input) {
			if(input.again === true) {
				letter.newGame();
				goHangman();
			}
			else {
				letter.showResult();
				console.log("Game Over! See you soon~".inverse);
			}
		});
}

