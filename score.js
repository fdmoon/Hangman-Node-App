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
}

module.exports = Score;

