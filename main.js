
// simple variable that assigns the value of X to 3
var x = 3
// when run "x > 4" in console will return false

// assigns variable teamname to "Red Sox"
var teamname = "Red Sox"
// when I enter "teamname" in console it will pull teamname "Red Sox"

// assigns team stats
var teamstats = [15, 25, 50]
//

//assigning player variable names and values
var ortiz = {name: "David Ortiz", battingaverage: 0.241, rbi: 17, homeruns: 6, doubles: 5, triples: 0, atbats: 112, games: 30}
var pedroia = {name: "Dustin Pedroia", battingaverage: 0.275, rbi: 10, homeruns: 1, doubles: 11, triples: 0, atbats: 131, games: 31}
var napoli  = {name: "Mike Napoli", battingaverage: 0.290, rbi: 17, homeruns: 5, doubles: 6, triples: 0, atbats: 107, games: 30}
//

// Function to pull all multiple base hits and add them together.
function multiplebase (player) {
	return player.doubles  + player.triples + player.homeruns;
}
//

// Function to pull player at bats and divide by the number of games to determine average at bat per game.
function batspergame (player) {
	return player.atbats / player.games;
}
//

// Function to pull player homeruns and divide by the number of games to determine average home runs per game.
function homerunspergame (player) {
	return player.homeruns / player.games;
}
//

// Function to pull player doubles and divide by the number of games to determine average home runs per game.
function doublespergame (player) {
	return player.doubles / player.games;
}
//

// Function to pull player triples and divide by the number of games to determine average home runs per game.
function triplespergame (player) {
	return player.triples / player.games;
}
//









console.log('Dustin Pedroia At Bats Per Game:', batspergame(pedroia));
console.log('David Ortiz Multiples Base Hits:', multiplebase(ortiz));
console.log('Mike Napoli Home Runs Per Game:', homerunspergame(napoli));