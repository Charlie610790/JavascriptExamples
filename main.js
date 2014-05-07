
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
var bigPapi = {name: "David Ortiz", battingaverage: ".241", rbi: "17", homeruns: "6", singles: "100", doubles: "200"}
var pedroia = {name: "Dustin Pedroia", battingaverage: ".275", rbi: "10", homeruns: "1", singles: "100", doubles: "200"}
var napoli  = {name: "Mike Napoli", battingaverage: 0.290, rbi: "17", honeruns: "5", singles: "100", doubles: "200"}
//

function hitstotal (player) {
	return player.singles  + player.doubles;
}

console.log('bigPapis total hits:', hitstotal(bigPapi) );