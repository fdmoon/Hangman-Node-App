// ************************************
// * hangman.js
// ************************************

var inquirer = require("inquirer");
var Letter = require("./letter.js");

var letter = new Letter();

letter.initialize();
letter.newGame();

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
			console.log("");

			letter.setGuess(input.guess);

			if(letter.isDone()) {
				// tryAgain();
			}
			else {
				goHangman();
			}
		});
}

// function tryAgain() {
// 	inquirer
// 		.prompt([
// 			{
// 				type: "confirm",
// 				message: "",
// 				name: ""
// 			}
// 		]).then(function(input) {

// 		});
// }

