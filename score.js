// ************************************
// * score.js
// ************************************

var Score = function() {
	this.wins = 0;
	this.losses = 0;

	this.setResult = function(isWin) {
		if(isWin === true) {
			this.wins++;
		}
		else {
			this.losses++;
		}
	}

	this.showResult = function() {
		console.log("\n***************************************".rainbow);
		console.log("* wins: " + this.wins);
		console.log("* losses: " + this.losses);
		console.log("***************************************\n".rainbow);
	}
}

module.exports = Score;

