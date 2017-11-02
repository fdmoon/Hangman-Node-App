// ************************************
// * word.js
// ************************************

var Word = function() {
	this.ansBank = ["Hancock", "The Texas Chainsaw Massacre", "Pulp Fiction", "Saturday Night Fever", "American Pie", "Some Like It Hot", "Basic Instinct", "Stand By Me", "Robin Hood", "Snakes On A Plane"];

	this.getWord = function() {
		var idx = Math.floor(Math.random()*10);
		return this.ansBank[idx];
	}
}

module.exports = Word;

